import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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

const styles = StyleSheet.create({
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#ffebee',
    padding: 15,
    marginHorizontal: 15,
    marginTop: 20,
    borderRadius: 8,
  },
  warningText: {
    fontSize: 12,
    color: '#d32f2f',
    flex: 1,
  },
});

export default TerminationWarning; 