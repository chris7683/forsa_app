import React, { useState } from 'react';
import { SafeAreaView, ScrollView, ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';
import ChangePINHeader from '../../components/ChangePINHeader/ChangePINHeader';
import StepIndicator from '../components/StepIndicator/StepIndicator';
import PINInputSection from '../../components/PINInputSection/PINInputSection';
import styles from './ChangePINScreenStyles';
import { changePIN } from '../services/api';
import { useApi } from '../hooks/useApi';
import { AntDesign } from '@expo/vector-icons';
import Header from '../components/Header';

const ChangePINScreen = ({ navigation }) => {
  const [newPIN, setNewPIN] = useState('');
  const [confirmPIN, setConfirmPIN] = useState('');
  
  const { loading, error, execute: executeChangePIN } = useApi(changePIN);

  const handleSetPIN = async () => {
    if (newPIN !== confirmPIN) {
      // Handle PIN mismatch
      return;
    }

    try {
      await executeChangePIN(newPIN);
      // Handle success (e.g., show success message, navigate back)
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} title="Change PIN" />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#00c890" />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} title="Change PIN" />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error.message}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Change PIN" />
      <ScrollView style={styles.scrollViewContent}>
        <ChangePINHeader />
        <StepIndicator currentStep={1} totalSteps={2} />
        <PINInputSection
          newPIN={newPIN}
          setNewPIN={setNewPIN}
          confirmPIN={confirmPIN}
          setConfirmPIN={setConfirmPIN}
          onSetPIN={handleSetPIN}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePINScreen; 