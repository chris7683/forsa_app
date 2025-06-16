import React from 'react';
import { View, Text } from 'react-native';
import styles from './ChangePINHeaderStyles';
import { AntDesign } from '@expo/vector-icons';

const ChangePINHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <AntDesign name="arrowleft" size={24} color="#000" style={styles.backButton} />
      <Text style={styles.headerTitle}>Change PIN</Text>
    </View>
  );
};

export default ChangePINHeader; 