import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './CardStatusSectionStyles';

const CardStatusSection = ({ status }) => {
  return (
    <View style={styles.statusContainer}>
      <AntDesign name="checkcircle" size={20} color="#4CAF50" />
      <Text style={styles.statusText}>Card is {status}</Text>
    </View>
  );
};

export default CardStatusSection; 