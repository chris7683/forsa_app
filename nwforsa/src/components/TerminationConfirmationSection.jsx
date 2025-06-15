import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TerminationConfirmationSectionStyles from '../styles/TerminationConfirmationSectionStyles';

const TerminationConfirmationSection = ({ selectedReason, onConfirm }) => {
  return (
    <View style={TerminationConfirmationSectionStyles.container}>
      <TouchableOpacity
        style={[TerminationConfirmationSectionStyles.confirmButton, !selectedReason && TerminationConfirmationSectionStyles.confirmButtonDisabled]}
        onPress={onConfirm}
        disabled={!selectedReason}
      >
        <Text style={TerminationConfirmationSectionStyles.confirmButtonText}>Confirm Termination</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TerminationConfirmationSection; 