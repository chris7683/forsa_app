import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './TerminationWarningStyles';

const TerminationWarning = () => {
  return (
    <View style={styles.warningContainer}>
      <AntDesign name="warning" size={20} color="#ff0000" style={{ marginRight: 10 }} />
      <Text style={styles.warningText}>
        Warning: This action will permanently terminate your card. You will need to visit a branch to get a new card.
      </Text>
    </View>
  );
};

export default TerminationWarning; 