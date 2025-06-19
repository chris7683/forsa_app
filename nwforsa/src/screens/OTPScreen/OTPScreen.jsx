import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, SafeAreaView, ScrollView } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import OTPScreenHeader from '../../components/OTPScreenHeader/OTPScreenHeader';
import StepIndicator from '../../components/StepIndicator/StepIndicator';
import VerifyIdentitySection from '../../components/VerifyIdentitySection/VerifyIdentitySection';
import styles from './OTPScreenStyles';
import Header from '../../components/Header/Header';
import { activateCard, handleApiError } from '../../services/api';

const OTPScreen = ({ navigation, route }) => {
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ['Verify Identity', 'Set PIN', 'Confirmation'];

  const validateOTP = () => {
    const newErrors = {};
    if (!otp.trim()) {
      newErrors.otp = 'Please enter OTP';
    } else if (otp.length !== 6) {
      newErrors.otp = 'OTP must be 6 digits';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleVerify = async () => {
    if (validateOTP()) {
      try {
        const { cardNumber, cardHolder, expiry } = route.params;
        await activateCard(cardNumber, cardHolder, expiry, otp);
        navigation.navigate('Card');
      } catch (error) {
        handleApiError(error);
      }
    }
  };

  const handlePINSubmit = (pin) => {
    console.log('New PIN submitted:', pin);
    setCurrentStep(2);
  };

  const renderContent = () => {
    switch (currentStep) {
      case 0:
        return <VerifyIdentitySection onVerify={handleVerify} />;
      case 1:
        return <Text>PIN Input Section (To be implemented)</Text>; // Placeholder for PIN input
      case 2:
        return <Text>Confirmation Section (To be implemented)</Text>; // Placeholder for confirmation
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Card Activation" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <StepIndicator currentStep={currentStep} steps={steps} />
          {renderContent()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OTPScreen; 