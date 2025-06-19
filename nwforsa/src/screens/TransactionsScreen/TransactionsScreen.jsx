import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import TransactionsSearchFilter from '../../components/TransactionsSearchFilter/TransactionsSearchFilter';
import BalanceExpensesCards from '../../components/BalanceExpensesCards/BalanceExpensesCards';
import TransactionsList from '../../components/TransactionsList/TransactionsList';
import { getTransactions } from '../../services/api';
import { useApi } from '../../hooks/useApi';
import Header from '../../components/Header/Header';
import styles from './TransactionsScreenStyles';
import { mockTransactions } from '../../data/mockData';

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

  const filteredTransactions = mockTransactions.filter(transaction => {
    const matchesSearchTerm = transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || transaction.category === activeFilter;
    return matchesSearchTerm && matchesFilter;
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Transactions" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <BalanceExpensesCards />
          <TransactionsSearchFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <TransactionsList transactions={filteredTransactions} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransactionsScreen; 