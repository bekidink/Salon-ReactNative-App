
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'onboarding',
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
       
      </Stack>
    </GestureHandlerRootView>
  );
}
