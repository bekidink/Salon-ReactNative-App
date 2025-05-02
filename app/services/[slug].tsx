import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { FeaturedData, ServiceData } from '~/utils/data';
import { formatNumber } from '~/utils/formatNumber';
import { Image } from 'react-native';
import { useServiceStore } from '~/features/services/presentation/store/useServiceStore';

const Service = () => {
  const { slug } = useLocalSearchParams<{ slug: string }>();
//   const [selectedService, setSelectedService] = useState(slug || '');
const { selectedService, setSelectedService } = useServiceStore();
  return (
    <View>
      {/* Header */}
      <View className="flex flex-row items-center p-2">
        <TouchableOpacity style={{ paddingHorizontal: 16 }} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={32} color="black" />
        </TouchableOpacity>
        <View className="items-center justify-center">
          <Text className="ml-20 text-center text-lg">Service Menu</Text>
        </View>
      </View>

      {/* Service List */}
      <FlatList
        horizontal
        data={ServiceData}
        renderItem={({ item }) => {
          const isSelected = selectedService === item.title;
          return (
            <TouchableOpacity
              className={`${isSelected ? 'bg-white  ' : 'bg-tertiary'} mx-2 rounded-full px-4 py-2`}
              onPress={() => setSelectedService(item.title)}>
              <Text style={{ color: isSelected ? '#007acc' : '#000' }}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
      <View className='px-3'>
        <FlatList
          data={FeaturedData}
          contentContainerStyle={{ gap: 12, paddingVertical: 10 }}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({ item }) => {
            const isSelected = selectedService === item.title;
            return (
              <TouchableOpacity
                onPress={() => setSelectedService(item.title)}
                className="flex flex-row gap-x-4 shadow-xl">
                <Image source={item.img} className="h-36 w-32 rounded-md" resizeMode="cover" />
                <View className="flex-1 gap-y-2 pr-4">
                  <View className="mt-2 flex flex-row flex-wrap gap-2">
                    {item.services.map((service, i) => (
                      <Text key={i} className="text-primary">
                        .{service}
                      </Text>
                    ))}
                  </View>
                  <Text className="text-lg font-bold">
                    {item.title} {isSelected ? '-' : '+'}
                  </Text>
                  <Text className="truncate">{item.location}</Text>
                  <View className="flex flex-row items-center gap-x-2">
                    <AntDesign name="star" size={24} color="#F98600" />
                    <Text className="text-secondary">{item.rating}</Text>
                    <Text>({formatNumber(item.ratingCount)})</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Service;
