import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './SelectActionSectionStyles';

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

export default SelectActionSection; 