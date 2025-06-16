import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './TerminationWarningSectionStyles';

const TerminationWarningSection = ({ onConfirm, onCancel }) => {
  return (
    <View style={styles.container}>
      <AntDesign name="warning" size={40} color="#FFCC00" style={styles.icon} />
      <Text style={styles.title}>Important Warning</Text>
      <Text style={styles.message}>
        Terminating your card will result in the loss of all associated benefits and services.
        Are you sure you wish to proceed?
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.cancelButtonText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
          <Text style={styles.confirmButtonText}>I Understand, Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TerminationWarningSection; 