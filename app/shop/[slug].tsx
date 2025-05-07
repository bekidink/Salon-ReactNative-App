import { View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import React, { useCallback, useMemo, useRef } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { FeaturedData } from '~/utils/data';
import BottomSheet from '@gorhom/bottom-sheet';
import { router } from 'expo-router';
const ShopDetail = () => {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const shop = FeaturedData.find((item) => item.title === slug);
 const bottomSheetRef = useRef<BottomSheet>(null);
 const snapPoints = useMemo(() => ['50%', '90%'], []);

 const handleOpenSheet = useCallback(() => {
   bottomSheetRef.current?.expand();
 }, []);
  if (!shop) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Shop not found</Text>
      </View>
    );
  }
  return (
    <>
      <ImageBackground source={shop.img} style={{ flex: 1, justifyContent: 'flex-end' }}>
        {/* Top Icons */}
        <View className="absolute left-4 right-4 top-10 flex-row items-center justify-between">
          <TouchableOpacity onPress={()=>router.back()} className="rounded-full bg-white p-2 shadow">
            <AntDesign name="left" size={20} color="#156778" />
          </TouchableOpacity>
          <View className="flex-row gap-x-2">
            <TouchableOpacity className="rounded-full bg-white p-2 shadow">
              <AntDesign name="hearto" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity className="rounded-full bg-white p-2 shadow">
              <AntDesign name="enviromento" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Card */}
        <View className="mx-4 mb-36 rounded-2xl bg-white p-4 shadow-lg">
          {/* Services */}
          <View className="mb-2 flex-row flex-wrap gap-2">
            {shop.services.map((service, idx) => (
              <Text key={idx} className="text-xs text-primary">
                {service}.
              </Text>
            ))}
          </View>

          {/* Shop Info */}
          <View className="mb-2 flex-row items-center justify-between">
            <Text className="text-lg font-bold">{shop.title}</Text>
            <Text className="overflow-hidden rounded-full bg-yellow-400 px-2 py-1 text-xs">
              {/* {shop.status} */}
              open
            </Text>
          </View>
          <Text className="mb-2 text-sm text-gray-500">{shop.location}</Text>

          {/* Ratings */}
          <View className="mb-4 flex-row items-center">
            <AntDesign name="star" size={16} color="#F98600" />
            <Text className="ml-1 text-secondary">{shop.rating}</Text>
            <Text className="ml-1 text-gray-400">({shop.ratingCount})</Text>
            <Text className="ml-2 text-green-500">40%</Text>
            <Text className="ml-1 text-gray-400"></Text>
          </View>

          {/* Book Now Button */}
          <TouchableOpacity className="items-center rounded-full bg-primary p-3">
            <Text className="font-bold text-white">Book Now</Text>
          </TouchableOpacity>
        </View>

        {/* View More Details */}
        <TouchableOpacity onPress={()=>router.push(`/details/${slug}`)} className="mb-10 items-center">
          <Text className="text-gray-500">View More Details</Text>
        </TouchableOpacity>
      </ImageBackground>
      <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <Text className="mb-4 text-lg font-bold">About {shop.title}</Text>
          <Text className="mb-2 text-sm text-gray-700">
            {shop.title} offers high-quality services such as {shop.services.join(', ')}.
          </Text>
          <Text className="text-sm text-gray-700">
            Located at {shop.location}. Open status: . Rating: {shop.rating} from {shop.ratingCount}{' '}
            reviews.
          </Text>
          {/* Add more details here */}
        </ScrollView>
      </BottomSheet>
    </>
  );
};

export default ShopDetail;
