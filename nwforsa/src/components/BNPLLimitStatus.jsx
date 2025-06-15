import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const BNPLLimitStatus = () => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <AntDesign name="creditcard" size={20} color="#000" />{/* Placeholder icon */}
        <Text style={styles.sectionTitle}>BNPL Limit Status</Text>
      </View>
      <View style={styles.limitDetails}>
        <Text style={styles.limitLabel}>Available Limit:</Text>
        <Text style={styles.limitValue}>34,250 EGP</Text>
      </View>
      <View style={styles.limitDetails}>
        <Text style={styles.limitLabel}>Used Limit:</Text>
        <Text style={styles.limitValue}>15,750 EGP</Text>
      </View>
      <View style={styles.limitDetails}>
        <Text style={styles.limitLabel}>Total Limit:</Text>
        <Text style={styles.limitValue}>50,000 EGP</Text>
      </View>
      {/* Placeholder for the progress bar */}
      <View style={styles.progressBarPlaceholder}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 15,
    marginTop: 15,
    padding: 15,
    borderRadius: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  limitDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  limitLabel: {
    fontSize: 14,
    color: '#666',
  },
  limitValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  progressBarPlaceholder: {
    height: 8,
    backgroundColor: '#e0e0e0', // Light grey color for placeholder
    marginTop: 10,
    borderRadius: 4,
  },
});

export default BNPLLimitStatus; 