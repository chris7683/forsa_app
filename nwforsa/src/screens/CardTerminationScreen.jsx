import React, { useState } from 'react';
import { SafeAreaView, ScrollView, ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';
import CardTerminationHeader from '../components/CardTerminationHeader.jsx';
import TerminationReasonSection from '../components/TerminationReasonSection.jsx';
import TerminationWarningSection from '../components/TerminationWarningSection';
import TerminationConfirmationSection from '../components/TerminationConfirmationSection';
import styles from '../styles/CardTerminationScreenStyles';
import { terminateCard } from '../services/api';
import { useApi } from '../hooks/useApi';
import { AntDesign } from '@expo/vector-icons';
import Header from '../components/Header';

const terminationReasons = [
  { key: 'reason1', label: 'Lost Card', description: 'My card has been lost or stolen.' },
  { key: 'reason2', label: 'Damaged Card', description: 'My card is damaged and no longer usable.' },
  { key: 'reason3', label: 'Fraudulent Activity', description: 'I suspect unauthorized transactions on my card.' },
  { key: 'reason4', label: 'No Longer Needed', description: 'I no longer require this card.' },
];

const CardTerminationScreen = ({ navigation }) => {
  const [selectedReason, setSelectedReason] = useState(null);
  
  const { loading, error, execute: executeTerminateCard } = useApi(terminateCard);

  const handleReasonSelect = (reason) => {
    setSelectedReason(reason);
  };

  const handleConfirmTermination = async () => {
    if (!selectedReason) return;

    try {
      await executeTerminateCard(selectedReason);
      // Handle success (e.g., show success message, navigate back)
    } catch (error) {
      // Handle error (e.g., show error message)
    }
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
        <TerminationReasonSection
          terminationReasons={terminationReasons}
          selectedReason={selectedReason}
          onReasonSelect={handleReasonSelect}
        />
        <TerminationWarningSection />
        <TerminationConfirmationSection
          selectedReason={selectedReason}
          onConfirm={handleConfirmTermination}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardTerminationScreen; 