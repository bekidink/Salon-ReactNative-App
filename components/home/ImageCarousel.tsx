import React, { useRef } from 'react';
import { View, Text, Dimensions, ImageBackground } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { BannerBg } from '~/constants/images';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const ImageTextCarousel = ({ data = [], width = SCREEN_WIDTH * 0.9, height = 130 }) => {
  const carouselRef = useRef(null);

  const defaultData = [
    {
      image: BannerBg,
      title: 'Beautiful Beach',
      description: 'Relax by the serene ocean waves',
    },
    {
      image: BannerBg,
      title: 'Majestic Mountains',
      description: 'Explore the breathtaking peaks',
    },
    {
      image: BannerBg,
      title: 'Lush Forest',
      description: "Discover nature's tranquility",
    },
  ];

  const carouselData = data.length > 0 ? data : defaultData;

  const renderItem = ({ item }: any) => (
    <View
      style={{
        width: width, // Use carousel width
        height: height, // Use carousel height
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
      }}>
      <ImageBackground
        source={item.image}
        resizeMode="cover"
        style={{ flex: 1, width: '100%', height: '100%' }} // Ensure full size
      >
        {/* <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: 16,
            justifyContent: 'flex-end',
            flex: 1,
          }}>
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-col">
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 4 }}>
                {item.title}
              </Text>
              <Text style={{ fontSize: 14, color: 'white' }}>{item.description}</Text>
            </View>
            <View className="rounded-full bg-secondary ">
              <Text className="p-2 text-2xl">50%</Text>
            </View>
          </View>
        </View> */}
      </ImageBackground>
    </View>
  );

  return (
    <View className="flex items-center justify-center rounded bg-gray-100">
      <Carousel
        ref={carouselRef}
        data={carouselData}
        renderItem={renderItem}
        width={width}
        height={height}
        loop
        autoPlay
        autoPlayInterval={3000}
        scrollAnimationDuration={1000}
      />
    </View>
  );
};

export default ImageTextCarousel;
