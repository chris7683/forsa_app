import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SelectActionSection = ({ selectedAction, onActionSelect }) => {
  return (
    <View style={styles.selectActionContainer}>
      <Text style={styles.sectionTitle}>Select Action</Text>

      <TouchableOpacity
        style={styles.actionOption}
        onPress={() => onActionSelect('lock')}
      >
        {selectedAction !== 'lock' ? (
          <View style={{width: 20, height: 20, borderWidth: 1, borderColor: '#ccc', borderRadius: 10}}/> 
        ) : (
          <AntDesign
            name={'checkcircle'}
            size={20}
            color={ '#004AAD' }
          />
        )}
        <View style={styles.actionTextContainer}>
          <Text style={styles.actionTitle}>Lock My Card</Text>
          <Text style={styles.actionDescription}>Temporarily disable all transactions</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionOption}
        onPress={() => onActionSelect('unlock')}
      >
        {selectedAction !== 'unlock' ? (
          <View style={{width: 20, height: 20, borderWidth: 1, borderColor: '#ccc', borderRadius: 10}}/> 
        ) : (
          <AntDesign
            name={'checkcircle'}
            size={20}
            color={ '#004AAD' }
          />
        )}
        <View style={styles.actionTextContainer}>
          <Text style={styles.actionTitle}>Unlock My Card</Text>
          <Text style={styles.actionDescription}>Enable all transactions</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  selectActionContainer: {
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  actionOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
  },
  actionTextContainer: {
    marginLeft: 10,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  actionDescription: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
});

export default SelectActionSection; 