import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './BNPLSummaryStyles';

const BNPLSummary = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BNPL Summary</Text>
        <AntDesign name="questioncircleo" size={16} color="#000" />
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.label}>Total Limit:</Text>
        <Text style={styles.value}>AED 10,000</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.label}>Used Limit:</Text>
        <Text style={styles.value}>AED 2,500</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.label}>Available Limit:</Text>
        <Text style={styles.value}>AED 7,500</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BNPLSummary; 