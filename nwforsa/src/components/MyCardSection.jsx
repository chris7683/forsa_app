import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import MyCardSectionStyles from '../../src/styles/MyCardSectionStyles';

const MyCardSection = ({ userProfile }) => {
  const lastFourDigits = userProfile?.cardNumber ? userProfile.cardNumber.slice(-4) : 'XXXX';
  const expiryDate = userProfile?.cardExpiry ? userProfile.cardExpiry : 'MM/YY';
  const transferredLimit = userProfile?.balance ? userProfile.balance.toLocaleString() : '0';

  return (
    <View style={MyCardSectionStyles.cardSection}>
      <Text style={MyCardSectionStyles.sectionTitle}>My Card</Text>
      <View style={MyCardSectionStyles.cardContainer}>
        <View style={MyCardSectionStyles.cardHeader}>
          <AntDesign name="creditcard" size={20} color="#fff" style={MyCardSectionStyles.cardIcon} />
          <Text style={MyCardSectionStyles.cardName}>Forsa Prepaid Card</Text>
          <View style={MyCardSectionStyles.activeStatus}>
            <Text style={MyCardSectionStyles.activeStatusText}>{userProfile?.cardStatus || 'Inactive'}</Text>
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