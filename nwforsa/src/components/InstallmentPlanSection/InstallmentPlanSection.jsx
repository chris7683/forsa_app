import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './InstallmentPlanSectionStyles';

const InstallmentPlanSection = ({ amount, plans, selectedPlan, onPlanSelect, calculateMonthlyPayment }) => {
  return (
    <View style={styles.installmentSectionContainer}> 
      <View style={styles.installmentSectionHeader}> 
        <AntDesign name="calendar" size={20} color="#000" />
        <Text style={styles.installmentSectionTitle}>Select Installment Plan</Text> 
      </View>

      <View>
        {plans && plans.map((plan) => (
          <TouchableOpacity
            key={plan.id}
            style={[styles.installmentOptionContainer, selectedPlan?.id === plan.id && styles.selectedInstallmentOption]}
            onPress={() => onPlanSelect(plan)}
          >
            <View style={[styles.radioButton, selectedPlan?.id === plan.id && styles.radioButtonSelected]}>
              {selectedPlan?.id === plan.id && <View style={styles.radioButtonInner} />}
            </View>
            <View style={styles.planDetailsContainer}> 
              <Text style={styles.planMonthsText}>{plan.months} Months</Text> 
              <Text style={styles.planPaymentText}>Monthly Payment: {calculateMonthlyPayment(amount, plan.months, plan.interestRate)} EGP</Text>
              <Text style={styles.planInterestText}>Interest Rate: <Text style={styles.planInterestValueText}>{plan.interestRate}%</Text></Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default InstallmentPlanSection; 