import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './TerminationReasonSectionStyles';

const TerminationReasonSection = ({ terminationReasons = [], selectedReason, onReasonSelect }) => {
  return (
    <View style={styles.reasonContainer}>
      <View style={styles.sectionHeader}>
        <AntDesign name="closecircleo" size={20} color="#000" />
        <Text style={styles.sectionTitle}>Reason for Termination</Text>
      </View>
      {terminationReasons.map((reason) => (
        <TouchableOpacity
          key={reason.key}
          style={styles.reasonOption}
          onPress={() => onReasonSelect(reason.key)}
        >
          {selectedReason !== reason.key ? (
            <View style={{width: 20, height: 20, borderWidth: 1, borderColor: '#ccc', borderRadius: 10}}/>
          ) : (
            <AntDesign name={'checkcircle'} size={20} color={'#004AAD'} />
          )}
          <View style={styles.reasonTextContainer}>
            <Text style={styles.reasonLabel}>{reason.label}</Text>
            <Text style={styles.reasonDescription}>{reason.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TerminationReasonSection; 