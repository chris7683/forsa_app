import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './BNPLLimitStatusStyles';

const BNPLLimitStatus = ({ currentLimit, totalLimit, onPress }) => {
  const progress = (currentLimit / totalLimit) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your BNPL Limit</Text>
        <AntDesign name="questioncircleo" size={16} color="#000" />
      </View>
      <Text style={styles.limitText}>AED {currentLimit} / AED {totalLimit}</Text>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.message}>You've used {progress.toFixed(0)}% of your available BNPL limit.</Text>
      <Text style={styles.link} onPress={onPress}>View Details</Text>
    </View>
  );
};

export default BNPLLimitStatus; 