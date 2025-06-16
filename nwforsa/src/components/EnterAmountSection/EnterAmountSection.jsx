import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { mockAmountData } from '../../data/mockData';
import styles from './EnterAmountSectionStyles';

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
      <Text style={styles.maximumAmount}>Maximum: {mockAmountData.maximumAmount.toLocaleString()} EGP</Text>

      <Text style={styles.quickSelectTitle}>Quick Select</Text>
      <View style={styles.quickSelectButtons}>
        {mockAmountData.quickSelectAmounts.map((item) => (
          <TouchableOpacity 
            key={item.value}
            style={styles.quickSelectButton} 
            onPress={() => onAmountChange(item.value.toString())}
          >
            <Text style={styles.quickSelectButtonText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default EnterAmountSection; 