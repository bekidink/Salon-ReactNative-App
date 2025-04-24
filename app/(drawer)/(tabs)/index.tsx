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
    <ScrollView className="flex-1">
      <View className="mx-2 flex flex-row justify-between p-2">
        <View className="flex flex-col">
          <Text className="text-2xl font-bold">Hello, Samantha</Text>
          <Text>Find the service you want, and treat yourself</Text>
        </View>
        <View className="bg-primary items-center justify-center rounded-full px-3 ">
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
              className="m-1 flex-1 items-center rounded-lg bg-white p-2"
              style={{ maxWidth: '23%' }}
              onPress={() => router.push(`/services/${item.title}` as never)}>
              <View className="bg-tertiary rounded-full p-2">
                <Image source={item.icon} className="h-12 w-12 rounded-full" resizeMode="contain" />
              </View>

              <Text className="text-primary mt-2 text-center text-lg font-medium">
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
          <TouchableOpacity>
            <Text className="text-primary font-semibold">View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={FeaturedData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12 }}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity className=" flex-1  ">
              <View className="">
                <Image source={item.img} className="h-56 w-52 rounded-md" resizeMode="cover" />
              </View>
              <View className="mt-2 flex flex-row gap-x-2">
                {item.services.map((service) => (
                  <Text className="text-primary">{service}</Text>
                ))}
              </View>
              <Text className="text-lg font-bold">{item.title}</Text>
              <Text className="trunicate">{item.location}</Text>
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
              className="bg-tertiary m-1 flex flex-row items-center rounded-lg p-2"
              onPress={() => router.push(`/services/${item.title}` as never)}>
              <View className="bg-tertiary rounded-full p-2">
                <Image source={item.icon} className="h-12 w-12 rounded-full" resizeMode="contain" />
              </View>

              <Text className="text-primary mt-2 text-center text-lg font-medium">
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
            <Text className="text-primary font-semibold">View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={FeaturedData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12 }}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity className=" flex flex-row gap-x-4 ">
              <View className="">
                <Image source={item.img} className="h-36 w-32 rounded-md" resizeMode="cover" />
              </View>
              <View className='gap-y-2'>
                <View className="mt-2 flex flex-row gap-x-2">
                  {item.services.map((service) => (
                    <Text className="text-primary items-center">.{service}</Text>
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
