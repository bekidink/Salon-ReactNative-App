import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { useState } from 'react';

const NotificationsScreen = () => {
  const [activeTab, setActiveTab] = useState<'Message' | 'Notification'>('Message');

  const notifications = [
    {
      id: 1,
      salon: 'Plush Beauty Lounge',
      message: 'Good morning, anything we ca...',
      time: '11.32 PM',
    },
    { id: 2, salon: 'Lovely Lather', message: 'Good morning, anything we ca...', time: '11.32 PM' },
    {
      id: 3,
      salon: 'Cute Stuff Salon',
      message: 'I would like to book an appoin...',
      time: 'Yesterday',
    },
    {
      id: 4,
      salon: 'Love Live Salon',
      message: 'I would like to book an appoin...',
      time: 'Yesterday',
    },
    {
      id: 5,
      salon: 'Glitter Pop Salon',
      message: 'I would like to book an appoin...',
      time: 'Yesterday',
    },
  ];

  const messages = [
    { id: 1, salon: 'Glow Up Salon', message: 'Hi, are you available tomorrow?', time: '10.00 AM' },
    { id: 2, salon: 'Chic Hair Studio', message: 'Thanks for your visit!', time: 'Yesterday' },
  ];

  const currentData = activeTab === 'Message' ? messages : notifications;

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="mt-10 flex-row items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
        <Text className="text-xl font-bold">Messages</Text>
      </View>

      {/* Tabs */}
      <View className="flex-row border-b border-gray-200 bg-white">
        <Pressable
          onPress={() => setActiveTab('Message')}
          className={`flex-1 items-center py-3 ${activeTab === 'Message' ? 'border-b-2 border-black' : ''}`}>
          <Text className={`text-base ${activeTab === 'Message' ? 'font-bold' : 'text-gray-500'}`}>
            Message
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab('Notification')}
          className={`flex-1 items-center py-3 ${activeTab === 'Notification' ? 'border-b-2 border-black' : ''}`}>
          <Text
            className={`text-base ${activeTab === 'Notification' ? 'font-bold' : 'text-gray-500'}`}>
            Notification
          </Text>
        </Pressable>
      </View>

      {/* Search Bar */}
      <View className="bg-white p-3">
        <TextInput
          placeholder={`Search ${activeTab.toLowerCase()}s or salon`}
          className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2"
        />
      </View>

      {/* List */}
      <FlatList
        data={currentData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="border-b border-gray-100 bg-white p-4"
            onPress={() => router.push(`/chat/${item.salon}` as never)}>
            <View className="flex-row justify-between">
              <Text className="font-bold">{item.salon}</Text>
              <Text className="text-gray-500">{item.time}</Text>
            </View>
            <Text className="mt-1 text-gray-600">{item.message}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default NotificationsScreen;
