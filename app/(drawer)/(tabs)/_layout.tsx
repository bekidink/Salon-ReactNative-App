import { Tabs } from 'expo-router';
import { Image } from 'react-native';

import { TabBarIcon } from '~/components/TabBarIcon';
import { HomeIcon, SearchBarIcon } from '~/constants/icons';

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
    </Tabs>
  );
}
