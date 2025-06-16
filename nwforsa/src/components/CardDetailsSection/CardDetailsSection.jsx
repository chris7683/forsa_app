import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CardDetailsSectionStyles from './CardDetailsSectionStyles';
import { mockCards } from '../../data/mockData';

const CardDetailsSection = ({ navigation, selectedCardId }) => {
  const [isCardNumberVisible, setIsCardNumberVisible] = useState(false);
  const [isCvvVisible, setIsCvvVisible] = useState(false);

  const card = mockCards.find(c => c.id === selectedCardId);

  if (!card) {
    return (
      <View style={CardDetailsSectionStyles.cardDetailsContainer}>
        <Text style={CardDetailsSectionStyles.errorText}>Card data not found.</Text>
      </View>
    );
  }

  return (
    <View style={CardDetailsSectionStyles.cardDetailsContainer}>
      <View style={CardDetailsSectionStyles.cardRow}>
        <Text style={CardDetailsSectionStyles.cardLabel}>Card Number</Text>
        <View style={CardDetailsSectionStyles.cardValueContainer}>
          <Text style={CardDetailsSectionStyles.cardValue}>
            {isCardNumberVisible ? card.cardNumber : '**** **** **** ' + card.cardNumber.slice(-4)}
          </Text>
          <TouchableOpacity onPress={() => setIsCardNumberVisible(!isCardNumberVisible)}>
            <AntDesign name={isCardNumberVisible ? 'eyeo' : 'eye'} size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={CardDetailsSectionStyles.cardRow}>
        <Text style={CardDetailsSectionStyles.cardLabel}>Card Holder Name</Text>
        <Text style={CardDetailsSectionStyles.cardValue}>{card.cardHolderName}</Text>
      </View>

      <View style={CardDetailsSectionStyles.cardRow}>
        <Text style={CardDetailsSectionStyles.cardLabel}>Expiry Date</Text>
        <Text style={CardDetailsSectionStyles.cardValue}>{card.expiryDate}</Text>
      </View>

      <View style={CardDetailsSectionStyles.cardRow}>
        <Text style={CardDetailsSectionStyles.cardLabel}>CVV</Text>
        <View style={CardDetailsSectionStyles.cardValueContainer}>
          <Text style={CardDetailsSectionStyles.cardValue}>
            {isCvvVisible ? card.cvv : '***'}
          </Text>
          <TouchableOpacity onPress={() => setIsCvvVisible(!isCvvVisible)}>
            <AntDesign name={isCvvVisible ? 'eyeo' : 'eye'} size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={CardDetailsSectionStyles.sectionHeader}>
        <AntDesign name="exclamationcircleo" size={20} color="#000" />
        <Text style={CardDetailsSectionStyles.sectionTitle}>Important Tips</Text>
      </View>
      <Text style={CardDetailsSectionStyles.tipText}>
        - Never share your card details with anyone.
      </Text>
      <Text style={CardDetailsSectionStyles.tipText}>
        - Report any suspicious activity immediately.
      </Text>
      <Text style={CardDetailsSectionStyles.tipText}>
        - Keep your card in a safe place.
      </Text>
      <Text style={CardDetailsSectionStyles.tipText}>
        - Your CVV is for online transactions only.
      </Text>
    </View>
  );
};

export default CardDetailsSection; 