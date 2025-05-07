import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import {
  GalleryBg1,
  Gallerybg2,
  SpecialityBg1,
  Specialitybg2,
  SpecialityBg3,
  SpecialityBg4,
} from '~/constants/images';
import { Calendar } from 'react-native-calendars';
import { BlurView } from 'expo-blur';
import { Feather } from '@expo/vector-icons';
export default function BookingService() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Woman Blunt Cut',
      price: '$50',
      type: 'Hair service',
      image: GalleryBg1,
    },
    {
      id: 2,
      name: 'Manicure',
      price: '$50',
      type: 'Nail service',
      image: Gallerybg2,
    },
  ]);

  const specialists = [
    { id: 1, name: 'Ronald', image: SpecialityBg1 },
    { id: 2, name: 'Merry', image: Specialitybg2 },
    { id: 3, name: 'Bella', image: SpecialityBg3 },
    { id: 4, name: 'Joseph', image: SpecialityBg4 },
  ];

  const [selectedDate, setSelectedDate] = useState('Thu 10');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
const [selectedId, setSelectedId] = useState<number>();
  const dates = ['Wed 9', 'Thu 10', 'Fri 11', 'Sat 12', 'Sun 13', 'Mon 14'];
  const times = ['08:00 AM', '10:00 AM', '11:00 AM', '01:00 PM'];

  const removeService = (id: any) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        {/* Services Section */}
        <View className="flex flex-row justify-between">
          <Text className="mb-2 text-lg font-semibold">Your Services Order</Text>
          <TouchableOpacity className="mb-2 flex-row items-center justify-between rounded-lg  p-2">
            <Text className="text-sm font-bold text-primary">+ Add more</Text>
          </TouchableOpacity>
        </View>

        {services.map((service) => (
          <View
            key={service.id}
            className="mb-2 flex-row items-center justify-between rounded-lg  p-2">
            <View className="flex-row items-center">
              <Image source={service.image} className="mr-2 h-10 w-10" />
              <View>
                <Text className="font-semibold">{service.name}</Text>
                <Text className="font-semibold text-primary">
                  {service.price} <Text className="text-sm text-gray-500">{service.type}</Text>
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => removeService(service.id)}
              className="rounded-full bg-red-200 px-4 py-2">
              <Text className="text-red-600">-</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Specialist Section */}
        <Text className="mb-2 mt-4 text-lg font-semibold">Specialist</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {specialists.map((specialist) => {
            const isSelected = selectedId === specialist.id;
            return (
              <TouchableOpacity
                key={specialist.id}
                onPress={() => setSelectedId(specialist.id)}
                className="relative mr-4">
                <View
                  className={`h-16 w-16 overflow-hidden rounded-full ${isSelected ? 'border-2 border-primary' : ''}`}>
                  <Image source={specialist.image} className="h-full w-full" />
                  {isSelected && (
                    <BlurView
                      intensity={50}
                      tint="light"
                      style={{ ...StyleSheet.absoluteFillObject }}>
                      <View className="absolute inset-0 items-center justify-center">
                        <Feather name="edit" size={20} color="#1D4ED8" />
                      </View>
                    </BlurView>
                  )}
                </View>
                <Text className="mt-1 text-center text-sm">{specialist.name}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Date Section */}
        <Text className="mb-2 mt-4 text-lg font-semibold">Date</Text>
        <Calendar
          onDayPress={(day: any) => {
            setSelectedDate(day.dateString);
          }}
          markedDates={{
            [selectedDate]: {
              selected: true,
              selectedColor: '#3B82F6', // Tailwind blue-500
              selectedTextColor: '#FFFFFF',
            },
          }}
          theme={{
            todayTextColor: '#3B82F6',
            textDayFontWeight: '500',
          }}
        />

        {/* Time Section */}
        <Text className="mb-2 mt-4 text-lg font-semibold">Time</Text>
        <View className="flex-row flex-wrap">
          {times.map((time) => (
            <TouchableOpacity
              key={time}
              onPress={() => setSelectedTime(time)}
              className={`mx-1 my-1 rounded-full px-4 py-2 ${
                selectedTime === time ? 'bg-blue-500' : 'bg-gray-200'
              }`}>
              <Text
                className={`text-center ${selectedTime === time ? 'text-white' : 'text-gray-700'}`}>
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Notes Section */}
        <Text className="mb-20  text-lg font-semibold">Notes</Text>
        <View className="rounded-lg border border-gray-300 p-2">
          <Text className="text-gray-500">Type your notes here</Text>
        </View>

        {/* Total and Checkout */}
      </ScrollView>
      <View className=" flex flex-row justify-between absolute bottom-14 left-0 right-0 border-t border-gray-200 bg-white p-2 px-4">
        {' '}
        <View className="  flex-column ">
          <Text className="text-lg font-semibold">Total [1 Service]</Text>
          <Text className="text-lg font-semibold">$40 $40</Text>
        </View>
        <TouchableOpacity className="mb-4 rounded-lg bg-blue-500 p-3">
          <Text className="text-center font-semibold text-white">Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
