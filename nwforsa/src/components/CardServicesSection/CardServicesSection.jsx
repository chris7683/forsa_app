import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './CardServicesSectionStyles';

const CardServiceItem = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.serviceItem} onPress={onPress}>
    <AntDesign name={icon} size={24} color="#00c890" />
    <Text style={styles.serviceItemText}>{title}</Text>
  </TouchableOpacity>
);

const CardServicesSection = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Card Services</Text>
      <View style={styles.servicesGrid}>
        <CardServiceItem icon="creditcard" title="Load Money" onPress={() => navigation.navigate('LoadMoney')} />
        <CardServiceItem icon="swap" title="Manage BNPL" onPress={() => navigation.navigate('ManageBNPL')} />
        <CardServiceItem icon="lock" title="Lock/Unlock Card" onPress={() => navigation.navigate('Lock')} />
        <CardServiceItem icon="barcode" title="Change PIN" onPress={() => navigation.navigate('ChangePIN')} />
        <CardServiceItem icon="delete" title="Terminate Card" onPress={() => navigation.navigate('CardTermination')} />
        <CardServiceItem icon="questioncircleo" title="FAQ" onPress={() => navigation.navigate('FAQ')} />
      </View>
    </View>
  );
};

export default CardServicesSection; 