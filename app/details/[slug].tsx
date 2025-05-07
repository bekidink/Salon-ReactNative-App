import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { router, useLocalSearchParams } from 'expo-router';
import { FeaturedData, ServiceData } from '~/utils/data';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { formatNumber } from '~/utils/formatNumber';
import { useServiceStore } from '~/features/services/presentation/store/useServiceStore';
import { GalleryBg1, Gallerybg2, GalleryBg3, GalleryBg4, SpecialityBg1, Specialitybg2, SpecialityBg3, SpecialityBg4 } from '~/constants/images';
export default function PlushBeautyScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const { selectedService, setSelectedService } = useServiceStore();
  const shop = FeaturedData.find((item) => item.title === slug);
  if (!shop) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Shop not found</Text>
      </View>
    );
  }
  return (
    <View className="relative flex-1 bg-white">
      <Image
        source={shop.img} // Replace with your image
        className="h-60 w-full"
        resizeMode="cover"
      />
      <SafeAreaView className="absolute left-0 right-0 top-0 z-10 mt-4 flex-row items-center justify-between px-4">
        <TouchableOpacity className="rounded-full bg-white p-2" onPress={() => router.back()}>
          <AntDesign name="left" size={20} color="#156778" />
        </TouchableOpacity>
        <View className="flex-row gap-2">
          <TouchableOpacity className="rounded-full bg-white p-2">
            <AntDesign name="hearto" size={20} color="#ED4C5C" />
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full bg-white p-2">
            <AntDesign name="enviromento" size={20} color="#156778" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
        {/* Header Image */}

        {/* Title & Info */}
        <Text className="text-2xl font-bold">Plush Beauty Lounge</Text>
        <Text className="py-1 text-gray-500">204 S State Road 7, Royal Palm, FL 33414</Text>
        <View className="flex flex-row justify-between">
          <View className="flex flex-col">
            <View className="flex flex-row items-center justify-between gap-x-3 py-2">
              <FontAwesome6 name="clock" size={14} color="#156778" />
              <Text className=" text-gray-500">[Open Today] </Text>
            </View>
            <View className="mt-1 flex-row items-center gap-x-3">
              <FontAwesome name="star" size={16} color="#FBBF24" />
              <Text className="text-sm font-medium">4.9 (3k)</Text>
            </View>
          </View>
          <View className="flex flex-col">
            <View className="flex flex-row items-center justify-between gap-x-2 py-2">
              <FontAwesome6 name="clock" size={14} color="#156778" />
              <View className="flex flex-row items-center ">
                <Text className="text-primary ">-58%</Text>
                <Text className=" text-gray-500"> (6 pax available) </Text>
              </View>
            </View>
            <View className="mt-1 flex-row items-center gap-x-3">
              <Ionicons name="eye" size={24} color="#ADB3BC" />
              <Text className="text-base font-medium">10k views</Text>
            </View>
          </View>
        </View>

        <View className="flex flex-col">
          <View className="mt-3 border border-b-2 border-tertiary" />
          <Text className="mt-5 text-xl font-bold">About</Text>
          <Text className="mt-4 text-base leading-relaxed text-gray-800">
            Looking to pamper yourself? Plush Beauty Lounge offers haircuts, color, and styling
            services from talented professionals in a warm and welcoming environment.
            <Text className="font-semibold text-sky-600"> Read more</Text>
          </Text>
        </View>

        {/* About Section */}

        {/* Opening Hours */}
        <View className="mt-4">
          <Text className="mb-1 text-lg font-semibold">Opening Hours</Text>
          <View className="flex-row justify-between">
            <Text className="text-gray-600">Monday - Friday</Text>
            <Text className="text-gray-600">09:00am - 06:00pm</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-600">Saturday - Sunday</Text>
            <Text className="text-gray-600">09:00am - 08:00pm</Text>
          </View>
        </View>

        {/* Our Services */}
        <View className="mt-6">
          <Text className="text-lg font-semibold">Our Services</Text>
          <FlatList
            data={ServiceData}
            keyExtractor={(item) => item.title.toString()}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity
                className="m-1 flex flex-row items-center rounded-full bg-tertiary px-2 py-1"
                onPress={() => setSelectedService(item.title)}>
                <View className="rounded-full bg-tertiary p-1">
                  <Image
                    source={item.icon}
                    className="h-12 w-12 rounded-full"
                    resizeMode="contain"
                  />
                </View>

                <Text className="mt-2 text-center text-lg font-medium text-primary">
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />

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
                  <View className="flex-1  gap-y-2 pr-4">
                    <View className="mt-2 flex flex-row flex-wrap gap-2">
                      {item.services.map((service, i) => (
                        <Text key={i} className="text-primary">
                          .{service}
                        </Text>
                      ))}
                    </View>
                    <View className="flex-row items-center justify-between">
                      <Text className="text-lg font-bold">{item.title}</Text>
                      <View
                        className={`h-6 w-6 items-center border rounded-full${!isSelected ? '  bg-primary' : 'border-red-400 bg-none'}`}>
                        <Text className={``}>{isSelected ? '-' : '+'}</Text>
                      </View>
                    </View>

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

          <TouchableOpacity className="mt-3 flex items-center rounded-full border border-tertiary py-2">
            <Text className="text-lg font-semibold text-primary">View All Services</Text>
          </TouchableOpacity>
        </View>

        {/* Gallery */}
        <View className="mt-6">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-semibold">Gallery</Text>
            <TouchableOpacity>
              <Text className="text-sm font-semibold text-primary">View all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal className="mt-2 space-x-2">
            {[GalleryBg1, Gallerybg2, GalleryBg3, GalleryBg4].map((item, index) => (
              <Image key={index} source={item} className="h-24 w-24 rounded-md" />
            ))}
          </ScrollView>
        </View>

        {/* Our Specialist */}
        <View className="mt-6">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-semibold">Our Specialist</Text>
            <TouchableOpacity>
              <Text className="text-sm font-semibold text-sky-600">View all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal className="mt-2 gap-x-4">
            {[
              { name: 'Rachel', img: SpecialityBg1 },
              { name: 'Rachel', img: Specialitybg2 },
              { name: 'Rachel', img: SpecialityBg3 },
              { name: 'Rachel', img: SpecialityBg4 },
            ].map((item, idx) => (
              <View key={idx} className="mx-2 items-center">
                <Image source={item.img} className="h-24 w-24 rounded-full" />
                <Text className="mt-1 text-base font-bold text-gray-700">{item.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Reviews */}
        <View className="mb-20 mt-6">
          <View className="flex-row items-center justify-between py-2">
            <Text className="text-lg font-semibold">Reviews</Text>
            <TouchableOpacity>
              <Text className="text-base font-semibold text-primary">View all</Text>
            </TouchableOpacity>
          </View>
          {[
            {
              name: 'Rachel',
              img: SpecialityBg1,
              comment: 'This place is amazing! Great vibes and very professional staff.',
            },
            {
              name: 'Natalia L',
              img: SpecialityBg1,
              comment: 'I love the service here! My hair specialist is Rachel. Highly recommend!',
            },
            {
              name: 'Julia Martin',
              img: SpecialityBg1,
              comment: 'Best haircut I’ve had in years. Will definitely return!',
            },
          ].map((review, index) => (
            <View key={index} className="mb-4 flex-row gap-x-4">
              <View>
                <Image source={review.img} className="h-16 w-16 rounded-full" />
              </View>
              <View className="flex flex-col">
                <View className="flex-row items-center justify-between">
                  <Text className="font-semibold text-gray-800">{review.name}</Text>
                  <Text className="text-end font-semibold text-gray-800">2 weeks ago</Text>
                </View>

                <Text className="mt-1 text-sm text-gray-600">{review.comment}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Book Now Button */}
      <View className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-2 px-4">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-lg font-semibold text-gray-800">
              Total<Text className="font-normal"> (1 services) </Text>{' '}
            </Text>
            <Text className="text-lg font-semibold text-gray-800">
              $40 <Text className="text-sm font-normal line-through">$10</Text>
            </Text>
          </View>
          <TouchableOpacity className="rounded-full border border-primary p-2">
            <FontAwesome6 name="rocketchat" size={24} color="#156778" />
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full bg-primary px-6 py-2" onPress={()=>router.push(`/book/${slug}`)}>
            <Text className="font-semibold text-white">Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
