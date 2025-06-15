import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const PINInputSection = ({ newPin, setNewPin, confirmPin, setConfirmPin }) => {
  return (
    <View style={styles.setPinContainer}>
      <View style={styles.sectionHeader}>
        <AntDesign name="lock" size={20} color="#000" />
        <Text style={styles.sectionTitle}>Set New PIN</Text>
      </View>

      <View style={styles.pinDescriptionContainer}>
        <AntDesign name="lock" size={12} color="#000" style={{ marginRight: 5 }} />
        <Text style={styles.pinDescription}>Create a 4-digit PIN for your card transactions</Text>
      </View>

      <Text style={styles.label}>New PIN</Text>
      <View style={styles.pinInputContainer}>
        <TextInput
          style={styles.pinInput}
          keyboardType="number-pad"
          maxLength={4}
          secureTextEntry={true}
          value={newPin}
          onChangeText={setNewPin}
        />
        <AntDesign name="eye" size={20} color="#ccc" />
      </View>

      <Text style={styles.label}>Confirm New PIN</Text>
      <View style={styles.pinInputContainer}>
        <TextInput
          style={styles.pinInput}
          keyboardType="number-pad"
          maxLength={4}
          secureTextEntry={true}
          value={confirmPin}
          onChangeText={setConfirmPin}
        />
        <AntDesign name="eye" size={20} color="#ccc" />
      </View>

      <View style={styles.requirementsContainer}>
        <Text style={styles.requirementsTitle}>PIN Requirements:</Text>
        <Text style={styles.requirementItem}>• Must be exactly 4 digits</Text>
        <Text style={styles.requirementItem}>• Avoid using obvious combinations (1234, 0000, etc.)</Text>
        <Text style={styles.requirementItem}>• Choose a PIN you can remember easily</Text>
      </View>

      <TouchableOpacity style={styles.setPinButton}>
        <Text style={styles.setPinButtonText}>Set New PIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  setPinContainer: {
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
  pinDescriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  pinDescription: {
    fontSize: 12,
    color: '#555',
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  pinInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#eee',
    paddingRight: 10,
  },
  pinInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: '#000',
  },
  requirementsContainer: {
    marginBottom: 20,
  },
  requirementsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  requirementItem: {
    fontSize: 12,
    color: '#555',
    marginBottom: 3,
  },
  setPinButton: {
    backgroundColor: '#00c890',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  setPinButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PINInputSection; 