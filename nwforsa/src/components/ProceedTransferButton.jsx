import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProceedTransferButton = () => {
  return (
    <TouchableOpacity style={styles.transferButton}>
      <Text style={styles.transferButtonText}>Proceed to Transfer</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  transferButton: {
    backgroundColor: '#00c890',
    paddingVertical: 15,
    marginHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  transferButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProceedTransferButton; 