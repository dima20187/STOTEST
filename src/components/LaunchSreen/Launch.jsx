import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { IMAGES } from '../../../assets/index';
import { styles } from '../../styles/customStyles';

const { LAUNCHE } = IMAGES;

function Launch({ navigation }) {
  function Loading() {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 1000);
  }

  return (
    <View style={style.container}>
      <TouchableOpacity onLayout={Loading}>
        <Image style={styles.image} source={LAUNCHE} />
      </TouchableOpacity>
    </View>
  );
}

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 30,
    fontSize: 35,
    color: 'black',
    fontWeight: '500',
    backgroundColor: 'white',
    height: '100%',
  },
});

export default Launch;
