import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CardDetailsSection = ({ navigation }) => {
  return (
    <View style={styles.cardDetailsContainer}>
      <View style={styles.sectionHeader}>
      <AntDesign name="creditcard" size={20} color="#000" />
        <Text style={styles.sectionTitle}>Card Details</Text>
      </View>

      <Text style={styles.label}>Card Number</Text>
      <TextInput
        style={styles.cardInput}
        value="•••• •••• •••• 9012"
        editable={false}
      />

      <Text style={styles.readyMessage}>Your card is ready to be activated</Text>

      <TouchableOpacity style={styles.activateButton} onPress={() => navigation.navigate('OTP')}>
        <Text style={styles.activateButtonText}>Continue to Activation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardDetailsContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  cardInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#000', // Ensure text is visible
    marginBottom: 15,
    backgroundColor: '#eee', // Light grey background for input
  },
  readyMessage: {
    fontSize: 14,
    color: '#4CAF50', // Green text
    textAlign: 'center',
    marginBottom: 20,
  },
  activateButton: {
    backgroundColor: '#00c890', // Use the green color from App.tsx
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  activateButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CardDetailsSection; 