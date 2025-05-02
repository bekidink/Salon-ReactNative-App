import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

const ChatScreen = () => {
  const messages = [
    { id: 1, text: 'Hello, good morning 👋', time: '9:41', sender: 'user' },
    {
      id: 2,
      text: 'Good morning, anything we can help at Plush Beauty Lounge Salon?',
      time: '9:41',
      sender: 'salon',
    },
    { id: 3, text: 'This look awesome', time: '11:20 PM', sender: 'user' },
    {
      id: 4,
      text: 'I would like to book an appointment at 2:30 PM today.',
      time: '11:20 PM',
      sender: 'user',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="mt-10 flex-row items-center border-b border-gray-200 bg-white p-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="rounded-full bg-white p-2 shadow">
          <AntDesign name="left" size={20} color="#156778" />
        </TouchableOpacity>
        <View className="ml-4 flex-1">
          <Text className="text-lg font-bold">Plush Beauty Lounge</Text>
          <Text className="text-sm text-gray-500">Online</Text>
        </View>
        <View>
          
        </View>
      </View>

      {/* Chat messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            className={`mx-3 my-1 max-w-[80%] rounded-lg p-3 ${item.sender === 'user' ? 'self-end bg-tertiary' : 'self-start bg-primary'}`}>
            <Text className={item.sender === 'user' ? 'text-white' : ''}>{item.text}</Text>
            <Text
              className={`mt-1 text-xs ${item.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
              {item.time}
            </Text>
          </View>
        )}
        className="flex-1 p-2"
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Input area */}
      <View className="flex-row items-center border-t border-gray-200 bg-white p-3">
        <TextInput
          placeholder="Type a message"
          className="mr-2 flex-1 rounded-full border border-gray-300 px-4 py-2"
        />
        <TouchableOpacity className="rounded-full bg-blue-500 p-2">
          <Text className="font-bold text-white">Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
