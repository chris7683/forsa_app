import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './FAQHeaderStyles';

const FAQHeader = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <AntDesign name="questioncircle" size={24} color="#000" />
      <Text style={styles.headerTitle}>Frequently Asked Questions</Text>
    </View>
  );
};

export default FAQHeader; 