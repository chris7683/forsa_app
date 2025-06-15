import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardScreenHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Card Activation</Text>
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

export default CardScreenHeader; 