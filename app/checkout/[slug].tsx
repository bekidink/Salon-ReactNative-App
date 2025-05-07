import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function BookingCheckout() {
  return (
    <View className="flex-1 bg-white px-4 py-6">
      {/* Header */}
      <View className="flex-row items-center gap-x-10">
        <TouchableOpacity className="mb-4 rounded-full bg-white" onPress={() => router.back()}>
          <AntDesign name="left" size={20} color="#156778" />
        </TouchableOpacity>
        <Text className="mb-4 text-center text-lg font-bold">Booking Checkout</Text>
      </View>

      {/* Card */}
      <View className="rounded-xl bg-blue-100 p-4">
        {/* Date and Time */}
        <View className="mb-2 flex-row justify-between">
          <View>
            <Text className="text-lg text-primary">Date</Text>
            <Text className="font-medium">March, 10th 2021</Text>
          </View>
          <View className="items-end">
            <Text className="text-lg text-primary">Start Time</Text>
            <Text className="font-medium">10:00 AM</Text>
          </View>
        </View>

        {/* Specialist and Duration */}
        <View className="mb-4 flex-row justify-between">
          <View>
            <Text className="text-lg text-primary">Specialist</Text>
            <Text className="font-medium">Bella</Text>
          </View>
          <View className="items-end">
            <Text className="text-lg text-primary">Duration</Text>
            <Text className="font-medium">3 hours</Text>
          </View>
        </View>

        <View className="mb-2 border-b border-gray-300" />
        <Text className="text-center">Services</Text>
        {/* Services */}
        <View className="mb-1 flex-row justify-between py-2">
          <Text className="text-gray-700">Blunt Cut</Text>
          <Text className="text-primary">$50</Text>
        </View>
        <View className="mb-4 flex-row justify-between">
          <Text className="text-gray-700">Manicure</Text>
          <Text className="text-primary">$50</Text>
        </View>
        <View className="mb-2 border-b border-gray-300" />
        {/* Subtotal & Discount */}
        <View className="mt-2 flex-row justify-between">
          <Text className="font-medium">Sub Total</Text>
          <Text className="font-medium">$100</Text>
        </View>
        <View className="mb-4 mt-1 flex-row justify-between">
          <Text className="font-medium text-gray-700">Discount</Text>
          <Text className="font-medium text-red-500">-$30</Text>
        </View>
        <View className="mb-2 border-b border-gray-300" />
        {/* Total */}
        <View className="mt-2 flex-row justify-between">
          <Text className="text-lg font-bold">Total</Text>
          <Text className="text-lg font-bold text-primary">$70</Text>
        </View>

        {/* Card Section */}
        <View className="mt-4 flex-row items-center justify-between rounded-full border border-primary p-3">
          <View className="flex-row items-center">
            <View className="mr-2 h-6 w-6 rounded-full bg-red-500" />
            <View className="flex-col">
              <Text className="font-medium">Samantha Martin</Text>
              <Text className="text-gray-500">3124325***</Text>
            </View>
          </View>
          <TouchableOpacity className="my-4 rounded-full " >
            <AntDesign name="right" size={20} color="#156778" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Pay Now Button */}
      <TouchableOpacity className="mt-6 items-center rounded-xl bg-primary py-4">
        <Text className="text-lg font-semibold text-white">Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}
