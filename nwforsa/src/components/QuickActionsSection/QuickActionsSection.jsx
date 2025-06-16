import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './QuickActionsSectionStyles';

const QuickActionItem = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.actionItem} onPress={onPress}>
    <AntDesign name={icon} size={24} color="#00c890" />
    <Text style={styles.actionText}>{title}</Text>
  </TouchableOpacity>
);

const QuickActionsSection = () => {
  return (
    <View style={styles.container}>
      <QuickActionItem icon="creditcard" title="Load Money" onPress={() => console.log('Load Money')} />
      <QuickActionItem icon="swap" title="Transactions" onPress={() => console.log('Transactions')} />
    </View>
  );
};

export default QuickActionsSection; 