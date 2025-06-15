import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BalanceExpensesCards = () => {
  return (
    <View style={styles.balanceExpensesContainer}>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceExpensesLabel}>Current Balance</Text>
        <Text style={styles.balanceValue}>15,750 EGP</Text>
      </View>
      <View style={styles.expensesCard}>
        <Text style={styles.balanceExpensesLabel}>This Month Expenses</Text>
        <Text style={styles.expensesValue}>-835.5 EGP</Text> {/* Assuming negative for expenses */}
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  balanceExpensesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 15,
  },
  balanceCard: {
    flex: 1,
    flexBasis: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginRight: 10,
  },
  expensesCard: {
    flex: 1,
    flexBasis: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginLeft: 10,
  },
  balanceExpensesLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  balanceValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  expensesValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default BalanceExpensesCards; 