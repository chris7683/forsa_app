import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import MyCardSectionStyles from './MyCardSectionStyles';
import { mockCards } from '../data/mockData';

const MyCardSection = ({ userProfile }) => {
  // Get the primary card from mock data
  const primaryCard = mockCards.find(card => card.isPrimary);
  
  const lastFourDigits = primaryCard?.cardNumber ? primaryCard.cardNumber.slice(-4) : 'XXXX';
  const expiryDate = primaryCard?.expiry || 'MM/YY';
  const transferredLimit = primaryCard?.balance ? primaryCard.balance.toLocaleString() : '0';

  return (
    <View style={MyCardSectionStyles.cardSection}>
      <Text style={MyCardSectionStyles.sectionTitle}>My Card</Text>
      <View style={MyCardSectionStyles.cardContainer}>
        <View style={MyCardSectionStyles.cardHeader}>
          <AntDesign name="creditcard" size={20} color="#fff" style={MyCardSectionStyles.cardIcon} />
          <Text style={MyCardSectionStyles.cardName}>Forsa Prepaid Card</Text>
          <View style={MyCardSectionStyles.activeStatus}>
            <Text style={MyCardSectionStyles.activeStatusText}>{primaryCard?.cardStatus || 'Inactive'}</Text>
          </View>
        </View>

        <Text style={MyCardSectionStyles.cardNumber}>**** **** **** {lastFourDigits}</Text>
        <View style={MyCardSectionStyles.cardLimits}>
          <View>
            <Text style={MyCardSectionStyles.cardLimitLabel}>Transferred Limit</Text>
            <View style={MyCardSectionStyles.limitValueContainer}>
              <Text style={MyCardSectionStyles.cardLimitValue}>{transferredLimit} EGP</Text>
              <AntDesign name="eye" size={16} color="#fff" />
            </View>
          </View>
          <View style={MyCardSectionStyles.expiryContainer}>
            <Text style={MyCardSectionStyles.expiryText}>Expires</Text>
            <Text style={MyCardSectionStyles.expiryDate}>{expiryDate}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyCardSection; 