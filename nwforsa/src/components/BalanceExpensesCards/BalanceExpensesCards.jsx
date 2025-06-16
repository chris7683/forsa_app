import React from 'react';
import { View, Text } from 'react-native';
import { calculateBalanceAndExpenses } from '../../utils/financialCalculations';
import styles from './BalanceExpensesCardsStyles';

const BalanceExpensesCards = () => {
  const { currentBalance, monthlyExpenses, monthlyIncome, netMonthlyChange } = calculateBalanceAndExpenses();

  return (
    <View style={styles.balanceExpensesContainer}>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceExpensesLabel}>Current Balance</Text>
        <Text style={styles.balanceValue}>{currentBalance.toLocaleString()} EGP</Text>
      </View>
      <View style={styles.expensesCard}>
        <Text style={styles.balanceExpensesLabel}>This Month</Text>
        <View style={styles.monthlyDetails}>
          <View style={styles.monthlyRow}>
            <Text style={styles.monthlyLabel}>Expenses:</Text>
            <Text style={[styles.monthlyValue, styles.expenseValue]}>
              -{monthlyExpenses.toLocaleString()} EGP
            </Text>
          </View>
          <View style={styles.monthlyRow}>
            <Text style={styles.monthlyLabel}>Income:</Text>
            <Text style={[styles.monthlyValue, styles.incomeValue]}>
              +{monthlyIncome.toLocaleString()} EGP
            </Text>
          </View>
          <View style={[styles.monthlyRow, styles.netRow]}>
            <Text style={styles.monthlyLabel}>Net Change:</Text>
            <Text style={[
              styles.monthlyValue,
              netMonthlyChange >= 0 ? styles.incomeValue : styles.expenseValue
            ]}>
              {netMonthlyChange >= 0 ? '+' : ''}{netMonthlyChange.toLocaleString()} EGP
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BalanceExpensesCards; 