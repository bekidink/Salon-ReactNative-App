import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import React, { useRef, useMemo, useCallback } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import { ServiceData } from '~/utils/data';

const { width } = Dimensions.get('window');
export default function Home() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handlePresentModal = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <MapView
        // style={{ ...StyleSheet.absoluteFillObject }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      {/* Search Input */}
      <View style={{ position: 'absolute', top: 50, left: 20, right: 20 }}>
        <TextInput
          placeholder="Search services or salons..."
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            paddingHorizontal: 16,
            paddingVertical: 10,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 5,
          }}
        />
      </View>

      {/* Horizontal Scroll for Services */}
      <View style={{ position: 'absolute', top: 110 }}>
        <FlatList
          data={ServiceData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ alignItems: 'center', marginRight: 16 }}>
              <Image
                source={item.icon}
                style={{ width: 50, height: 50, borderRadius: 25, marginBottom: 4 }}
              />
              <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Floating Button */}
      <TouchableOpacity
        onPress={handlePresentModal}
        style={{
          position: 'absolute',
          alignSelf: 'center',
          top: '50%',
          marginTop: -30,
          backgroundColor: '#F98600',
          borderRadius: 30,
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
        }}>
        <AntDesign name="enviroment" size={28} color="white" />
      </TouchableOpacity>

      {/* BottomSheet for Nearby */}
      <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Nearby Salons</Text>
          {/* Example content */}
          <Text>Salon A</Text>
          <Text>Salon B</Text>
        </View>
      </BottomSheet>

      {/* Bottom Salon Card */}
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          backgroundColor: 'white',
          borderRadius: 16,
          padding: 16,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 6,
          elevation: 6,
        }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Elite Hair Salon</Text>
        <Text>123 Beauty Ave, Glam City</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
          <AntDesign name="star" size={16} color="#F98600" />
          <Text style={{ marginLeft: 4 }}>4.5 (3.4k reviews)</Text>
        </View>
      </View>
    </View>
  );
}

const StyleSheet = {
  absoluteFillObject: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
};