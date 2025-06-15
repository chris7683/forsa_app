import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BNPLSummaryStyles from '../../src/styles/BNPLSummaryStyles';

const BNPLSummary = ({ userProfile }) => {
  const availableBNPL = userProfile?.bnplLimit ? userProfile.bnplLimit.toLocaleString() : '0';
  const usedBNPL = userProfile?.bnplUsed ? userProfile.bnplUsed.toLocaleString() : '0';

  return (
    <View style={BNPLSummaryStyles.bnplContainer}>
      <View>
        <Text style={BNPLSummaryStyles.bnplLabel}>Available BNPL Limit</Text>
        <Text style={BNPLSummaryStyles.bnplValue}>{availableBNPL} EGP</Text>
      </View>
      <View>
        <Text style={BNPLSummaryStyles.bnplLabel}>Used</Text>
        <Text style={BNPLSummaryStyles.bnplValue}>{usedBNPL} EGP</Text>
      </View>
    </View>
  );
};

export default BNPLSummary; 