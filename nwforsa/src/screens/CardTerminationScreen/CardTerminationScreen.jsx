import React, { useState } from 'react';
import { SafeAreaView, ScrollView, ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';
import CardTerminationHeader from '../../components/CardTerminationHeader/CardTerminationHeader';
import TerminationReasonSection from '../../components/TerminationReasonSection/TerminationReasonSection';
import TerminationWarningSection from '../../components/TerminationWarningSection/TerminationWarningSection';
import TerminationConfirmationSection from '../../components/TerminationConfirmationSection/TerminationConfirmationSection';
import styles from './CardTerminationScreenStyles';
import { terminateCard } from '../services/api';
import { useApi } from '../hooks/useApi';
import { AntDesign } from '@expo/vector-icons';
import Header from '../components/Header';
import { mockTerminationReasons } from '../../mockData';

const CardTerminationScreen = ({ navigation }) => {
  const [selectedReason, setSelectedReason] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  
  const { loading, error, execute: executeTerminateCard } = useApi(terminateCard);

  const handleReasonSelect = (reason) => {
    setSelectedReason(reason);
    setShowWarning(true);
  };

  const handleConfirmTermination = async () => {
    if (!selectedReason) return;

    try {
      await executeTerminateCard(selectedReason);
      // Handle success (e.g., show success message, navigate back)
      setShowConfirmation(false);
      setSelectedReason(null);
      setShowWarning(false);
      alert('Card Termination Successful!');
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  const handleCancelTermination = () => {
    setShowConfirmation(false);
    setShowWarning(false);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#00c890" />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error.message}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Card Termination" />
      <ScrollView style={styles.scrollViewContent}>
        <CardTerminationHeader />
        {!showWarning && !showConfirmation && (
          <TerminationReasonSection
            reasons={mockTerminationReasons}
            selectedReason={selectedReason}
            onReasonSelect={handleReasonSelect}
          />
        )}
        {showWarning && !showConfirmation && (
          <TerminationWarningSection
            onConfirm={() => setShowConfirmation(true)}
            onCancel={handleCancelTermination}
          />
        )}
        {showConfirmation && (
          <TerminationConfirmationSection
            selectedReason={selectedReason}
            onConfirm={handleConfirmTermination}
            onCancel={handleCancelTermination}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardTerminationScreen; 