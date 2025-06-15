import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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

const styles = StyleSheet.create({
  reasonContainer: {
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#000',
  },
  reasonOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
  },
  reasonTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  reasonLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  reasonDescription: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
});

export default TerminationReasonSection; 