import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import VerifyIdentitySectionStyles from '../../src/styles/VerifyIdentitySectionStyles';

const VerifyIdentitySection = ({ navigation }) => {
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = () => {
    if (otp === '123456') {
      navigation.navigate('ChangePIN');
    } else {
      Alert.alert('Invalid OTP', 'Please enter the correct OTP.');
    }
  };

  return (
    <View style={VerifyIdentitySectionStyles.verifyIdentityContainer}>
      <View style={VerifyIdentitySectionStyles.sectionHeader}>
        <AntDesign name="inbox" size={20} color="#000" />
        <Text style={VerifyIdentitySectionStyles.sectionTitle}>Verify Your Identity</Text>
      </View>

      <View style={VerifyIdentitySectionStyles.otpMessageContainer}>
        <AntDesign name="infocirlce" size={16} color="#555" />
        <Text style={VerifyIdentitySectionStyles.otpMessage}>We've sent a 6-digit OTP to your registered mobile number ending with ***1234</Text>
      </View>

      <Text style={VerifyIdentitySectionStyles.label}>Enter OTP</Text>
      <TextInput
        style={VerifyIdentitySectionStyles.otpInput}
        keyboardType="number-pad"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
      />

      <TouchableOpacity>
        <Text style={VerifyIdentitySectionStyles.resendOtpText}>Resend OTP</Text>
      </TouchableOpacity>

      <TouchableOpacity style={VerifyIdentitySectionStyles.verifyButton} onPress={handleVerifyOTP}>
        <Text style={VerifyIdentitySectionStyles.verifyButtonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyIdentitySection; 