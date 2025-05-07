import { router, Stack } from 'expo-router';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import { ScrollView ,Text, View} from 'react-native';

import { Container } from '~/components/Container';
import ImageTextCarousel from '~/components/home/ImageCarousel';
import { ScreenContent } from '~/components/ScreenContent';
import { SearchIcon } from '~/constants/icons';
import { FeaturedData, FollowData, ServiceData } from '~/utils/data';
import AntDesign from '@expo/vector-icons/AntDesign';
import { formatNumber } from '~/utils/formatNumber';
export default function Home() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="mx-2 mt-10 flex flex-row justify-between p-2">
        <View className="flex flex-col">
          <Text className="text-2xl font-bold">Hello, Samantha</Text>
          <Text>Find the service you want, and treat yourself</Text>
        </View>
        <View className="items-center justify-center rounded-full bg-primary px-3 ">
          <Image source={SearchIcon} />
        </View>
      </View>
      <ImageTextCarousel />
      <View className="my-2 flex px-4 ">
        <Text className="my-3 text-2xl font-semibold">What do you want to do?</Text>
        <FlatList
          data={ServiceData}
          keyExtractor={(item) => item.title.toString()}
          numColumns={4}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="m-1 flex-1 items-center rounded-lg  p-2"
              style={{ maxWidth: '23%' }}
              onPress={() => router.push(`/services/${item.title}` as never)}>
              <View className="rounded-full bg-tertiary p-2">
                <Image source={item.icon} className="h-12 w-12 rounded-full" resizeMode="contain" />
              </View>

              <Text className="mt-2 text-center text-lg font-medium text-primary">
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
          columnWrapperStyle={{}}
        />
      </View>
      <View className="mx-3 my-2 flex px-4">
        <Text className="my-3 text-2xl font-semibold">Salon you follow</Text>
        <FlatList
          data={FollowData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12 }}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity className=" flex-1 items-center ">
              <View className=" p-2">
                <Image source={item.img} className="h-20 w-20 rounded-full" resizeMode="contain" />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View className="mx-3 my-2 flex px-4">
        <View className="my-3 flex flex-row items-center justify-between">
          <Text className="text-xl font-bold">Featured Salon</Text>
          <TouchableOpacity onPress={() => router.push(`/shop/gy` as never)}>
            <Text className="font-semibold text-primary">View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={FeaturedData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12 }}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="flex-1"
              onPress={() => router.push(`/shop/${item.title}` as never)}>
              {/* Image with favorite icon overlay */}
              <View className="relative">
                <Image source={item.img} className="h-56 w-52 rounded-md" resizeMode="cover" />

                {/* Favorite Icon (Heart) */}
                <TouchableOpacity className="absolute right-2 top-2 z-10 rounded-full bg-white/80 p-1">
                  <AntDesign name="hearto" size={18} color="#F98600" />
                </TouchableOpacity>
              </View>

              {/* Services */}
              <View className="mt-2 flex flex-row gap-x-2">
                {item.services.map((service, index) => (
                  <Text key={index} className="text-primary">
                    {service}
                  </Text>
                ))}
              </View>

              {/* Title and Location */}
              <Text className="text-lg font-bold">{item.title}</Text>
              <Text numberOfLines={1} className="truncate">
                {item.location}
              </Text>

              {/* Rating */}
              <View className="flex flex-row items-center gap-x-2">
                <AntDesign name="star" size={24} color="#F98600" />
                <Text className="text-secondary">{item.rating}</Text>
                <Text>({formatNumber(item.ratingCount)})</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View className="mx-3 my-2 flex px-4">
        <Text className="my-3 text-lg font-bold">Most Search Interest</Text>
        <FlatList
          data={ServiceData}
          keyExtractor={(item) => item.title.toString()}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              className="m-1 flex flex-row items-center rounded-full bg-tertiary px-2"
              onPress={() => router.push(`/services/${item.title}` as never)}>
              <View className="rounded-full bg-tertiary p-2">
                <Image source={item.icon} className="h-10 w-10 rounded-full" resizeMode="contain" />
              </View>

              <Text className="mt-2 text-center text-lg font-medium text-primary">
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View className="mx-3 my-2 flex px-4">
        <View className="my-3 flex flex-row items-center justify-between">
          <Text className="text-xl font-bold">Nearby Offers</Text>
          <TouchableOpacity>
            <Text className="font-semibold text-primary">View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={FeaturedData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12 }}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity className=" flex flex-row gap-x-4 shadow-xl">
              <View className="">
                <Image source={item.img} className="h-36 w-32 rounded-md" resizeMode="cover" />
              </View>
              <View className="gap-y-2">
                <View className="mt-2 flex flex-row gap-x-2">
                  {item.services.map((service) => (
                    <Text className="items-center text-primary">.{service}</Text>
                  ))}
                </View>
                <Text className="text-lg font-bold">{item.title}</Text>
                <Text className="trunicate">{item.location}</Text>
                <View className="flex flex-row items-center gap-x-2">
                  <AntDesign name="star" size={24} color="#F98600" />
                  <Text className="text-secondary">{item.rating}</Text>
                  <Text>({formatNumber(item.ratingCount)})</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
}
