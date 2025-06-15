import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FontAwesome, AntDesign } from '@expo/vector-icons';

import LoadMoneyScreen from './src/screens/LoadMoneyScreen';
import TransactionsScreen from './src/screens/TransactionsScreen';
import CardScreen from './src/screens/CardScreen';
import OTPScreen from './src/screens/OTPScreen';
import ChangePINScreen from './src/screens/ChangePINScreen';
import LockScreen from './src/screens/LockScreen';
import CardTerminationScreen from './src/screens/CardTerminationScreen';
import FAQScreen from './src/screens/FAQScreen';

import { customColors } from './constants/colors';
import HomeHeader from './src/components/HomeHeader';
import MyCardSection from './src/components/MyCardSection';
import BNPLSummary from './src/components/BNPLSummary';
import QuickActionsSection from './src/components/QuickActionsSection';
import CardServicesSection from './src/components/CardServicesSection';
import AppScreenStyles from './src/styles/AppScreenStyles';
import { getUserProfile } from './src/services/api';
import { useApi } from './src/hooks/useApi';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const { data: userProfile, loading, error, execute: fetchUserProfile } = useApi(getUserProfile);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const backgroundStyle = {
    backgroundColor: '#fff',
    flex: 1,
  };

  if (loading) {
    return (
      <SafeAreaView style={AppScreenStyles.container}>
        <View style={AppScreenStyles.loadingContainer}>
          <ActivityIndicator size="large" color="#00c890" />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={AppScreenStyles.container}>
        <View style={AppScreenStyles.errorContainer}>
          <Text style={AppScreenStyles.errorText}>{error.message}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={customColors.backgroundBlue}
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={AppScreenStyles.scrollView}
      >
        <HomeHeader userName={userProfile?.name} />

        <View>
          <MyCardSection userProfile={userProfile} />

          <BNPLSummary userProfile={userProfile} />
        </View>

        <View style={AppScreenStyles.whiteBackgroundContainer}>
          <QuickActionsSection navigation={navigation} />

          <CardServicesSection navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Card" component={CardScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="LoadMoney" component={LoadMoneyScreen} />
        <Stack.Screen name="Lock" component={LockScreen} />
        <Stack.Screen name="ChangePIN" component={ChangePINScreen} />
        <Stack.Screen name="FAQ" component={FAQScreen} />
        <Stack.Screen name="CardTermination" component={CardTerminationScreen} />
        <Stack.Screen name="Transactions" component={TransactionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
