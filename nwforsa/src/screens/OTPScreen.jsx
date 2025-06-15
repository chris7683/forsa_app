import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, SafeAreaView, ScrollView } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import OTPScreenHeader from '../components/OTPScreenHeader';
import StepIndicator from '../components/StepIndicator';
import VerifyIdentitySection from '../components/VerifyIdentitySection';
import OTPScreenStyles from '../styles/OTPScreenStyles';
import Header from '../components/Header';

const OTPScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = () => {
    if (otp === '123456') {
      navigation.navigate('ChangePIN');
    } else {
      Alert.alert('Invalid OTP', 'Please enter the correct OTP.');
    }
  };

  return (
    <SafeAreaView style={OTPScreenStyles.container}>
      <Header navigation={navigation} title="OTP Verification" />
      <ScrollView style={OTPScreenStyles.scrollViewContent}>
        <OTPScreenHeader />

        <StepIndicator activeStep={2} />

        <VerifyIdentitySection navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OTPScreen; 