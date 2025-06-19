import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import OnboardingScreen from './src/screens/OnboardingScreen/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import OTPScreen from './src/screens/OTPScreen/OTPScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CardScreen from './src/screens/CardScreen/CardScreen';
import LockScreen from './src/screens/LockScreen/LockScreen';
import ChangePINScreen from './src/screens/ChangePINScreen/ChangePINScreen';
import LoadMoneyScreen from './src/screens/LoadMoneyScreen/LoadMoneyScreen';
import TransactionsScreen from './src/screens/TransactionsScreen/TransactionsScreen';
import CardTerminationScreen from './src/screens/CardTerminationScreen/CardTerminationScreen';
import FAQScreen from './src/screens/FAQScreen/FAQScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate a 3-second loading time
  }, []);

  if (isLoading) {
    // Show a simple loading indicator instead of SplashScreen
    return <></>;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="OTP" component={OTPScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Card" component={CardScreen} />
          <Stack.Screen name="Lock" component={LockScreen} />
          <Stack.Screen name="ChangePIN" component={ChangePINScreen} />
          <Stack.Screen name="LoadMoney" component={LoadMoneyScreen} />
          <Stack.Screen name="Transactions" component={TransactionsScreen} />
          <Stack.Screen name="CardTermination" component={CardTerminationScreen} />
          <Stack.Screen name="FAQ" component={FAQScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
