import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './OTPScreenHeaderStyles';

const OTPScreenHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <AntDesign name="lock" size={24} color="#000" />
      <Text style={styles.headerTitle}>Enter OTP</Text>
    </View>
  );
};

export default OTPScreenHeader; 