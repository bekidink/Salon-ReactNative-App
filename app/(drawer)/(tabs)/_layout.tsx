import { Tabs } from 'expo-router';
import { Image } from 'react-native';

import { TabBarIcon } from '~/components/TabBarIcon';
import { BookingIcon, HomeIcon, MediaIcon, PersonIcon, SearchBarIcon } from '~/constants/icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarShowLabel: false,

          tabBarIcon: ({ color }) => <Image source={HomeIcon} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Image source={SearchBarIcon} />,
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: 'Tab Two',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Image source={BookingIcon} />,
        }}
      />
      <Tabs.Screen
        name="media"
        options={{
          title: 'Tab Two',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Image source={MediaIcon} />,
        }}
      />
      <Tabs.Screen
        name="person"
        options={{
          title: 'Tab Two',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Image source={PersonIcon} />,
        }}
      />
    </Tabs>
  );
}
