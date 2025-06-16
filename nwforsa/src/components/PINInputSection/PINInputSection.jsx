import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './PINInputSectionStyles';

const PINInputSection = ({ onPINSubmit }) => {
  const [pin, setPin] = useState('');

  const handleSubmit = () => {
    if (pin.length === 4) {
      onPINSubmit(pin);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter New PIN</Text>
      <Text style={styles.subtitle}>Please enter a 4-digit PIN</Text>
      
      <TextInput
        style={styles.input}
        value={pin}
        onChangeText={setPin}
        keyboardType="numeric"
        maxLength={4}
        secureTextEntry
        placeholder="Enter PIN"
        placeholderTextColor="#666"
      />

      <TouchableOpacity 
        style={[styles.button, pin.length !== 4 && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={pin.length !== 4}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PINInputSection; 