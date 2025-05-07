import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="[slug]" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
