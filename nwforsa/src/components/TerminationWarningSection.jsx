import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import TerminationWarningSectionStyles from '../styles/TerminationWarningSectionStyles';

const TerminationWarningSection = () => {
  return (
    <View style={TerminationWarningSectionStyles.warningMessageContainer}>
      <AntDesign name="infocirlce" size={16} color="#ffa726" />
      <Text style={TerminationWarningSectionStyles.warningMessageText}>
        Terminating your card is irreversible and will permanently close your card account.
      </Text>
    </View>
  );
};

export default TerminationWarningSection; 