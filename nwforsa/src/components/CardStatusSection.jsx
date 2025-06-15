import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CardStatusSection = () => {
  return (
    <View style={styles.cardStatusContainer}>
      <AntDesign name="lock1" size={24} color="#4CAF50" style={{ marginRight: 10 }} />
      <View>
        <Text style={styles.cardStatusTitle}>Card Status: Active</Text>
        <Text style={styles.cardStatusText}>Your card is currently active and can be used for transactions</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardStatusTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cardStatusText: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
});

export default CardStatusSection; 