import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { mockTransactionCategories } from '../../data/mockData';
import styles from './TransactionsSearchFilterStyles';

const TransactionsSearchFilter = ({ searchText, setSearchText, activeFilter, setActiveFilter }) => {
  const filterButtons = ['All', 'Debits', 'Credits', 'Pending'];

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search transactions..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
        {mockTransactionCategories.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[styles.filterButton, activeFilter === filter && styles.activeFilterButton]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text style={[styles.filterButtonText, activeFilter === filter && styles.activeFilterButtonText]}>{filter}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default TransactionsSearchFilter; 