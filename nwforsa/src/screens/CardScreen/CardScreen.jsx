import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import CardScreenHeader from '../../components/CardScreenHeader/CardScreenHeader';
import StepIndicator from '../../components/StepIndicator/StepIndicator';
import CardDetailsSection from '../../components/CardDetailsSection/CardDetailsSection';
import styles from './CardScreenStyles';
import Header from '../../components/Header/Header';
import QuickActionsSection from '../../components/QuickActionsSection/QuickActionsSection';
import CardServicesSection from '../../components/CardServicesSection/CardServicesSection';
import BNPLLimitStatus from '../../components/BNPLLimitStatus/BNPLLimitStatus';
import BNPLSummary from '../../components/BNPLSummary/BNPLSummary';
import { mockCards } from '../../data/mockData';

const CardScreen = ({ navigation }) => {
  const [selectedCardId, setSelectedCardId] = useState('card1');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(mockCards);
  }, []);

  const selectedCard = cards.find(card => card.id === selectedCardId);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="My Card" navigation={navigation} />
      <ScrollView style={styles.scrollViewContent}>
        <CardScreenHeader />

        <StepIndicator activeStep={1} />

        {/* Card Selection Buttons */}
        <View style={styles.cardSelectionContainer}>
          <TouchableOpacity
            style={selectedCardId === 'card1' ? styles.cardSelectButtonActive : styles.cardSelectButton}
            onPress={() => setSelectedCardId('card1')}
          >
            <Text style={selectedCardId === 'card1' ? styles.cardSelectButtonTextActive : styles.cardSelectButtonText}>
              Card 1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={selectedCardId === 'card2' ? styles.cardSelectButtonActive : styles.cardSelectButton}
            onPress={() => setSelectedCardId('card2')}
          >
            <Text style={selectedCardId === 'card2' ? styles.cardSelectButtonTextActive : styles.cardSelectButtonText}>
              Card 2
            </Text>
          </TouchableOpacity>
        </View>

        {selectedCard ? (
          <CardDetailsSection navigation={navigation} selectedCardId={selectedCardId} />
        ) : (
          <Text style={styles.noCardText}>No card selected or found.</Text>
        )}
        <QuickActionsSection navigation={navigation} />
        <CardServicesSection navigation={navigation} />
        {selectedCardId === 'card1' && (
          <>
            <BNPLLimitStatus currentLimit={7500} totalLimit={10000} onPress={() => console.log('View BNPL Details')} />
            <BNPLSummary />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardScreen; 