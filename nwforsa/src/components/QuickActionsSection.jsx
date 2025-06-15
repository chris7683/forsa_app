import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import QuickActionsSectionStyles from '../../src/styles/QuickActionsSectionStyles';

const QuickActionsSection = ({ navigation }) => {
  return (
    <View style={QuickActionsSectionStyles.quickActionsSectionWhiteBackground}>
      <Text style={QuickActionsSectionStyles.sectionTitleWhite}>Quick Actions</Text>
      <View style={QuickActionsSectionStyles.quickActionsButtons}>
        <TouchableOpacity style={QuickActionsSectionStyles.actionButton} onPress={() => navigation.navigate('LoadMoney')}>
          <AntDesign name="pluscircle" size={30} color="green" />
          <Text style={QuickActionsSectionStyles.actionButtonText}>Load Money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={QuickActionsSectionStyles.actionButton} onPress={() => navigation.navigate('Transactions')}>
          <AntDesign name="linechart" size={30} color="#8a2be2" />
          <Text style={QuickActionsSectionStyles.actionButtonText}>Transactions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuickActionsSection; 