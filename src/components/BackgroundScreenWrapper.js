
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/LayoutConst';


const BackgroundScreenWrapper = ({ image, children }) => {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.container}>
          {children}
        </View>
      </View>
    );
  };
  
  export default BackgroundScreenWrapper;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageContainer: {
      // customize size/position
    },
    image: {
      position: 'absolute',
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    },
    content: {
      // padding/margin for children
    },
  });