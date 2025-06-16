import React from 'react';
import { View, Text } from 'react-native';
import styles from './CardScreenHeaderStyles';

const CardScreenHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Card Activation</Text>
      <View style={{ width: 24 }} />{/* Spacer */}
    </View>
  );
};

export default CardScreenHeader; 