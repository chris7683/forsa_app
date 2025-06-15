import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import TransactionsSearchFilter from '../components/TransactionsSearchFilter';
import BalanceExpensesCards from '../components/BalanceExpensesCards';
import TransactionsList from '../components/TransactionsList';
import { getTransactions } from '../services/api';
import { useApi } from '../hooks/useApi';
import Header from '../components/Header';

const TransactionsScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  
  const { data: transactions = [], loading, error, execute: fetchTransactions } = useApi(getTransactions);

  useEffect(() => {
    fetchTransactions({ category: activeFilter, searchTerm });
  }, [activeFilter, searchTerm]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#00c890" />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error.message}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Transactions" />
      <ScrollView style={styles.scrollViewContent}>
        <TransactionsSearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <BalanceExpensesCards transactions={transactions} />
         <TransactionsList transactions={transactions} searchTerm={searchTerm} activeFilter={activeFilter} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollView: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flex: 1,
  },
});

export default TransactionsScreen; 