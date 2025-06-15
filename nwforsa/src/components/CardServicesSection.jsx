import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CardServicesSectionStyles from '../../src/styles/CardServicesSectionStyles';

const CardServicesSection = ({ navigation }) => {
  return (
    <View style={CardServicesSectionStyles.cardServicesSectionWhiteBackground}>
      <Text style={CardServicesSectionStyles.sectionTitleWhite}>Card Services</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Card')}>
        <View style={CardServicesSectionStyles.cardServiceItem}>
          <AntDesign name="lock" size={20} color="#000" />
          <View style={CardServicesSectionStyles.cardServiceTextContainer}>
            <Text style={CardServicesSectionStyles.cardServiceText}>Card Activation</Text>
            <Text style={CardServicesSectionStyles.cardServiceDescription}>Activate your new card</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Lock')}>
        <View style={CardServicesSectionStyles.cardServiceItem}>
          <AntDesign name="unlock" size={20} color="#000" />
          <View style={CardServicesSectionStyles.cardServiceTextContainer}>
            <Text style={CardServicesSectionStyles.cardServiceText}>Lock / Unlock Card</Text>
            <Text style={CardServicesSectionStyles.cardServiceDescription}>Temporarily lock or unlock your card</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ChangePIN')}>
        <View style={CardServicesSectionStyles.cardServiceItem}>
          <AntDesign name="edit" size={20} color="#000" />
          <View style={CardServicesSectionStyles.cardServiceTextContainer}>
            <Text style={CardServicesSectionStyles.cardServiceText}>Change PIN</Text>
            <Text style={CardServicesSectionStyles.cardServiceDescription}>Change your card PIN securely</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CardTermination')}>
        <View style={CardServicesSectionStyles.cardServiceItem}>
          <AntDesign name="closecircle" size={20} color="#000" />
          <View style={CardServicesSectionStyles.cardServiceTextContainer}>
            <Text style={CardServicesSectionStyles.cardServiceText}>Card Termination</Text>
            <Text style={CardServicesSectionStyles.cardServiceDescription}>Terminate your card permanently</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
        <View style={CardServicesSectionStyles.cardServiceItem}>
          <AntDesign name="questioncircle" size={20} color="#000" />
          <View style={CardServicesSectionStyles.cardServiceTextContainer}>
            <Text style={CardServicesSectionStyles.cardServiceText}>FAQs</Text>
            <Text style={CardServicesSectionStyles.cardServiceDescription}>Frequently asked questions and help</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardServicesSection; 