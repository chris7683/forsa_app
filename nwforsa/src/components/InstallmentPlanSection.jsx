import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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

const styles = StyleSheet.create({
  installmentSectionContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 15,
    marginTop: 15,
    padding: 15,
    borderRadius: 8,
  },
  installmentSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  installmentSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  installmentOptionContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selectedInstallmentOption: {
    borderColor: '#004AAD',
  },
  installmentOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#888',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderColor: '#004AAD',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#004AAD',
  },
  planDetailsContainer: {
    flex: 1,
  },
  planMonthsText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  planPaymentText: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
  },
  planInterestText: {
    fontSize: 13,
    color: '#555',
    marginTop: 2,
  },
  planInterestValueText: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default InstallmentPlanSection; 