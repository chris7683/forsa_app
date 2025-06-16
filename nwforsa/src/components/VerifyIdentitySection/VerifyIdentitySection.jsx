import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './VerifyIdentitySectionStyles';

const VerifyIdentitySection = ({ onVerify }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = () => {
    // Logic to send OTP to phoneNumber
    console.log('Sending OTP to:', phoneNumber);
    setIsOtpSent(true);
  };

  const handleVerifyOtp = () => {
    // Logic to verify OTP
    console.log('Verifying OTP:', otp);
    onVerify();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Verify Your Identity</Text>
      <Text style={styles.subtitle}>
        To ensure the security of your account, please verify your phone number.
      </Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <AntDesign name="phone" size={20} color="#555" style={styles.icon} />
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="e.g., +1234567890"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSendOtp}
          disabled={isOtpSent || phoneNumber.length < 10}
        >
          <Text style={styles.buttonText}>{isOtpSent ? 'OTP Sent!' : 'Send OTP'}</Text>
        </TouchableOpacity>
      </View>

      {isOtpSent && (
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Enter OTP</Text>
          <View style={styles.inputContainer}>
            <AntDesign name="Safety" size={20} color="#555" style={styles.icon} />
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              value={otp}
              onChangeText={setOtp}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleVerifyOtp}
            disabled={otp.length !== 6}
          >
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default VerifyIdentitySection; 