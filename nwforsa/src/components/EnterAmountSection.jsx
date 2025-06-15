import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const EnterAmountSection = ({ amount, onAmountChange }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Enter Amount</Text>
      <Text style={styles.amountLabel}>Amount (EGP)</Text>
      <View style={styles.amountInputContainer}>
        <TextInput
          style={styles.amountInput}
          keyboardType="numeric"
          value={amount}
          onChangeText={onAmountChange}
        />
        {/* Placeholder for the up/down arrows */}
        <View style={styles.amountInputArrows}>
          <AntDesign name="up" size={16} color="#000" />
          <AntDesign name="down" size={16} color="#000" style={{ marginTop: 2 }} />
        </View>
      </View>
      <Text style={styles.maximumAmount}>Maximum: 34,250 EGP</Text>

      <Text style={styles.quickSelectTitle}>Quick Select</Text>
      <View style={styles.quickSelectButtons}>
        {/* Quick Select Buttons with onPress handlers */}
        <TouchableOpacity style={styles.quickSelectButton} onPress={() => onAmountChange('2000')}>
          <Text style={styles.quickSelectButtonText}>2,000 EGP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickSelectButton} onPress={() => onAmountChange('3000')}>
          <Text style={styles.quickSelectButtonText}>3,000 EGP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickSelectButton} onPress={() => onAmountChange('5000')}>
          <Text style={styles.quickSelectButtonText}>5,000 EGP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickSelectButton} onPress={() => onAmountChange('7000')}>
          <Text style={styles.quickSelectButtonText}>7,000 EGP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickSelectButton} onPress={() => onAmountChange('10000')}>
          <Text style={styles.quickSelectButtonText}>10,000 EGP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickSelectButton} onPress={() => onAmountChange('15000')}>
          <Text style={styles.quickSelectButtonText}>15,000 EGP</Text>
        </TouchableOpacity>
      </View>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  amountLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  amountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  amountInput: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 10,
  },
  amountInputArrows: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  maximumAmount: {
    fontSize: 12,
    color: '#666',
    marginBottom: 15,
  },
  quickSelectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quickSelectButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickSelectButton: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 10,
    width: '48%', // Approx half width to fit two buttons per row
    alignItems: 'center',
  },
  quickSelectButtonText: {
    fontSize: 14,
    color: '#000',
  },
});

export default EnterAmountSection; 