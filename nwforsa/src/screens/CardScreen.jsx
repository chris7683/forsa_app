import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import CardScreenHeader from '../components/CardScreenHeader';
import StepIndicator from '../components/StepIndicator';
import CardDetailsSection from '../components/CardDetailsSection';
import CardScreenStyles from '../styles/CardScreenStyles';
import Header from '../components/Header';

const CardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={CardScreenStyles.container}>
      <Header navigation={navigation} title="Card Activation" />
      <ScrollView style={CardScreenStyles.scrollViewContent}>
        <CardScreenHeader />

        <StepIndicator activeStep={1} />

        <CardDetailsSection navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardScreen; 