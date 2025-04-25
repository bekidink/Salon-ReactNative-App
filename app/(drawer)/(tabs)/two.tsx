import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { AntDesign } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import * as Location from 'expo-location';
import { ServiceData } from '~/utils/data';
import { StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
const { width } = Dimensions.get('window');

export default function Home() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const [region, setRegion] = useState<Region | null>(null);

  const handlePresentModal = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permission denied',
          'Location access is needed to show your position on the map.'
        );
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      });
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {region && (
        <MapView style={StyleSheet.absoluteFillObject} region={region} showsUserLocation={true} />
      )}

      {/* Search Input */}
      <View
        // style={{ position: 'absolute', top: 50, left: 20, right: 20 }}
        className=" absolute top-70  left-20 right-20 flex flex-row items-center gap-x-8 mt-10">
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
        <TouchableOpacity className="rounded-full bg-white p-2" onPress={()=>router.push('/search')}>
          <Ionicons name="filter" size={32} color="black" />
        </TouchableOpacity>
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
            <TouchableOpacity className="bg-tertiary mx-4 rounded-full p-1">
              <Text className="">{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Floating Button */}
      <TouchableOpacity
        onPress={handlePresentModal}
        style={{
          position: 'absolute',
          alignSelf: 'start',
          top: '70%',
          marginTop: -30,
          backgroundColor: '#156778',
          borderRadius: 30,
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
        }}
        >
        <AntDesign name="enviroment" size={28} color="white" />
      </TouchableOpacity>

      {/* BottomSheet for Nearby */}
      <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Nearby Salons</Text>
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
