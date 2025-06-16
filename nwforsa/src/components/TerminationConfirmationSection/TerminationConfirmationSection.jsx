import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './TerminationConfirmationSectionStyles';

const TerminationConfirmationSection = ({ onConfirm, onCancel, selectedReason }) => {
  return (
    <View style={styles.container}>
      <AntDesign name="exclamationcircleo" size={40} color="#FFD700" style={styles.icon} />
      <Text style={styles.title}>Confirm Card Termination</Text>
      <Text style={styles.message}>
        You have selected: <Text style={styles.reasonText}>{selectedReason}</Text>. 
        Are you sure you want to proceed with terminating your card?
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TerminationConfirmationSection; 