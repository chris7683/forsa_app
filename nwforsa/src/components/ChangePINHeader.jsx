import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ChangePINHeader = () => {
  return (
    <View style={styles.header}>
      <AntDesign name="lock1" size={24} color="#fff" />
      <Text style={styles.headerTitle}>Create New PIN</Text>
      <View style={{ width: 24 }} />{/* Spacer */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#004AAD', // Dark blue header
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ChangePINHeader; 