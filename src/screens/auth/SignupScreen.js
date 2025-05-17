import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import backgroundImage from '../../../assets/images/zen.jpg';
import BackgroundScreenWrapper from '../../components/BackgroundScreenWrapper';

const SignupScreen = (props) => {
  return (
    <BackgroundScreenWrapper image={backgroundImage}>
      <Text>Signup</Text>
    </BackgroundScreenWrapper>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {},
});
