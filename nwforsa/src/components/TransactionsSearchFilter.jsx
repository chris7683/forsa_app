import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const TransactionsSearchFilter = ({ searchText, setSearchText, activeFilter, setActiveFilter }) => {
  const filterButtons = ['All', 'Debits', 'Credits', 'Pending'];

  return (
    <View style={styles.searchFilterContainer}>
      <View style={styles.searchBar}>
        <AntDesign name="search1" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search transactions..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.iconButtonContainer}>
          <AntDesign name="questioncircleo" size={20} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconButtonContainer, styles.lastIconButton]}>
          <AntDesign name="download" size={20} color="#888" />
        </TouchableOpacity>
      </View>

      <View style={styles.filterButtonsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterButtons}>
            {filterButtons.map(filter => (
              <TouchableOpacity
                key={filter}
                style={[styles.filterButton, activeFilter === filter && styles.activeFilterButton]}
                onPress={() => setActiveFilter(filter)}
              >
                <Text style={[styles.filterButtonText, activeFilter === filter && styles.activeFilterButtonText]}>{filter}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchFilterContainer: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  iconButtonContainer: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  lastIconButton: {
    marginRight: 0,
  },
  filterButtonsContainer: {
    marginBottom: 15,
  },
  filterButtons: {
    flexDirection: 'row',
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    marginRight: 10,
  },
  activeFilterButton: {
    backgroundColor: '#54A59B', // Teal/greenish color from screenshot
    borderColor: '#54A59B',
  },
  filterButtonText: {
    fontSize: 14,
    color: '#000',
  },
  activeFilterButtonText: {
    color: '#fff',
  },
});

export default TransactionsSearchFilter; 