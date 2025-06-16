import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './CardTerminationHeaderStyles';

const CardTerminationHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <AntDesign name="arrowleft" size={24} color="#000" style={styles.backButton} />
      <Text style={styles.headerTitle}>Card Termination</Text>
    </View>
  );
};

export default CardTerminationHeader; 