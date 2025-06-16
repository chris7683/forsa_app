import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import BNPLLimitStatus from '../../components/BNPLLimitStatus/BNPLLimitStatus';
import EnterAmountSection from '../../components/EnterAmountSection/EnterAmountSection';
import InstallmentPlanSection from '../../components/InstallmentPlanSection/InstallmentPlanSection';
import ProceedTransferButton from '../../components/ProceedTransferButton/ProceedTransferButton';
import styles from './LoadMoneyScreenStyles';
import { getBNPLPlans, getUserProfile } from '../../services/api';
import { useApi } from '../../hooks/useApi';
import Header from '../../components/Header/Header';

const LoadMoneyScreen = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  const { data: userProfile, loading: profileLoading, error: profileError, execute: fetchUserProfile } = useApi(getUserProfile);
  const { data: plans, loading: plansLoading, error: plansError, execute: fetchPlans } = useApi(getBNPLPlans);

  useEffect(() => {
    fetchUserProfile();
    fetchPlans();
  }, []);

  const handleAmountChange = (value) => {
    setAmount(value);
    setSelectedPlan(null);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const calculateMonthlyPayment = (principal, months, interestRate) => {
    if (!principal || !months || !interestRate) return '0.00';
    const monthlyInterestRate = interestRate / 100 / 12;
    const payment = principal * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -months));
    return payment.toFixed(2);
  };

  const handleProceed = () => {
    if (!amount || !selectedPlan) return;
    // Handle proceed logic
  };

  if (profileLoading || plansLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#00c890" />
        </View>
      </SafeAreaView>
    );
  }

  if (profileError || plansError) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{profileError?.message || plansError?.message}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Load Money" />
      <ScrollView style={styles.scrollViewContent}>
        <BNPLLimitStatus userProfile={userProfile} />
        <EnterAmountSection
          amount={amount}
          onAmountChange={handleAmountChange}
        />
        {amount && (
          <InstallmentPlanSection
            amount={parseFloat(amount)}
            plans={plans}
            selectedPlan={selectedPlan}
            onPlanSelect={handlePlanSelect}
            calculateMonthlyPayment={calculateMonthlyPayment}
          />
        )}
        <ProceedTransferButton
          amount={amount}
          selectedPlan={selectedPlan}
          onPress={handleProceed}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoadMoneyScreen; 