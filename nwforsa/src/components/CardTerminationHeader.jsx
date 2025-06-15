import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CardTerminationHeaderStyles from '../styles/CardTerminationHeaderStyles';

const CardTerminationHeader = () => {
  return (
    <View style={CardTerminationHeaderStyles.header}>
      <AntDesign name="arrowleft" size={24} color="#fff" />
      <Text style={CardTerminationHeaderStyles.headerTitle}>Card Termination</Text>
      <View style={{ width: 24 }} />{/* Spacer for alignment */}
    </View>
  );
};

export default CardTerminationHeader; 