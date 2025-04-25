import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, Modal, ScrollView } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { FeaturedData, ServiceData } from '~/utils/data';
import { formatNumber } from '~/utils/formatNumber';
import DateTimePicker from '@react-native-community/datetimepicker'; // Optional
import Slider from '@react-native-community/slider';
const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>(['Apple', 'Banana', 'Cherry']);
const [showFilter, setShowFilter] = useState(false);
const [selectedDate, setSelectedDate] = useState(new Date());
const [distance, setDistance] = useState(5);
const [rating, setRating] = useState(0);
const [selectedFor, setSelectedFor] = useState('');
const [selectedService, setSelectedService] = useState('');

  // Handle the search text input
  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  // Handle clicking on a recent search
  const handleRecentSearchClick = (search: string) => {
    setSearchText(search);
  };

  // Handle canceling/removing a recent search
  const handleCancelSearch = (search: string) => {
    setRecentSearches(recentSearches.filter((item) => item !== search));
  };
  const handleClearAll = () => {
    setRecentSearches([]);
  };
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View className="flex flex-row items-center justify-between">
        <TouchableOpacity style={{ paddingHorizontal: 16 }} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-lg">Search</Text>
        <TouchableOpacity onPress={() => setShowFilter(true)} style={{ paddingHorizontal: 16 }}>
          <Ionicons name="filter" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Search input */}
      <View className="mx-7 my-5 flex h-10 flex-row items-center rounded-full bg-[#ADB3BC] ">
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          value={searchText}
          onChangeText={handleSearchChange}
          placeholder="Search salon or service"
        />
      </View>

      {/* Recent searches */}
      {recentSearches.length > 0 && (
        <View>
          <View className="flex flex-row items-center justify-between">
            <Text>Recent Searches</Text>
            <TouchableOpacity onPress={handleClearAll}>
              <Text className="font-semibold text-primary">Clear All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={recentSearches}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 5,
                }}>
                <TouchableOpacity onPress={() => handleRecentSearchClick(item)}>
                  <Text>{item}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleCancelSearch(item)}>
                  <Ionicons name="close-circle" size={20} color="red" />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
      <View className=" my-2 flex px-4">
        <Text className="my-3 text-lg font-bold">Popular Search </Text>
        <FlatList
          data={ServiceData}
          keyExtractor={(item) => item.title.toString()}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="mx-4 my-2 flex flex-row items-center rounded-lg bg-tertiary px-5"
              onPress={() => router.push(`/services/${item.title}` as never)}>
              <Text className="mt-2 text-center text-lg font-medium text-primary">
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
          columnWrapperStyle={{}}
        />
      </View>
      <View className="my-3 gap-y-6">
        <Text className="text-xl font-bold">Suggestion for you</Text>
        <FlatList
          data={FeaturedData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12,paddingVertical:10 }}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity className=" flex flex-row gap-x-4 shadow-xl ">
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
      <Modal visible={showFilter} animationType="slide" transparent={true}>
        <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              maxHeight: '80%',
            }}>
            <ScrollView>
              <View className="flex flex-row justify-between">
                <TouchableOpacity onPress={() => setShowFilter(false)}>
                  <Text className="mb-3 text-lg font-bold text-primary">Cancel</Text>
                </TouchableOpacity>
                <Text className="mb-3 text-lg font-bold">Filter </Text>
                <TouchableOpacity>
                  <Text className="mb-3 text-lg font-bold text-red-500">Reset</Text>
                </TouchableOpacity>
              </View>

              {/* Date Picker */}
              <Text className="mt-2 font-semibold">Available On</Text>
              {/* <DateTimePicker
                value={selectedDate}
                mode="date"
                display="default"
                onChange={(_, date) => date && setSelectedDate(date)}
              /> */}

              {/* Service Selector */}
              <Text className="mt-3 font-semibold">Service</Text>
              <FlatList
                horizontal
                data={ServiceData}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      backgroundColor: selectedService === item.title ? '#ccc' : '#f0f0f0',
                      margin: 5,
                      padding: 10,
                      borderRadius: 10,
                    }}
                    onPress={() => setSelectedService(item.title)}>
                    <Text>{item.title}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.title}
              />

              {/* Rating Selector */}
              <Text className="mt-3 font-semibold">Minimum Rating</Text>
              <Slider
                minimumValue={0}
                maximumValue={5}
                step={0.5}
                value={rating}
                onValueChange={setRating}
              />
              <Text>{rating} ⭐</Text>

              {/* Service For */}
              <Text className="mt-3 font-semibold">Service For</Text>
              <View style={{ flexDirection: 'row', gap: 10, marginVertical: 5 }}>
                {['Men', 'Women', 'Kids'].map((option) => (
                  <TouchableOpacity
                    key={option}
                    style={{
                      backgroundColor: selectedFor === option ? '#ccc' : '#eee',
                      padding: 10,
                      borderRadius: 10,
                      marginRight: 10,
                    }}
                    onPress={() => setSelectedFor(option)}>
                    <Text>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Distance Slider */}
              <Text className="mt-3 font-semibold">Max Distance: {distance} km</Text>
              <Slider
                minimumValue={1}
                maximumValue={20}
                step={1}
                value={distance}
                onValueChange={setDistance}
              />

              <TouchableOpacity
                className='bg-primary mx-10 rounded-full py-4 my-2'
                onPress={() => setShowFilter(false)}>
                <Text className='text-white text-center text-lg'>Show Result</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SearchPage;
