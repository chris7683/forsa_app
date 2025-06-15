import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const FAQSearchFilter = ({ searchTerm, setSearchTerm, activeFilter, setActiveFilter }) => {
  const filterButtons = ['All', 'General Questions', 'Card Usage', 'Security', 'Fees & Charges', 'Technical Support'];

  return (
    <>
      <View style={styles.searchContainer}>
        <AntDesign name="search1" size={20} color="#555" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search FAQs..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterButtonContainer}>
        {filterButtons.map(filter => (
          <TouchableOpacity
            key={filter}
            style={[styles.filterButton, activeFilter === filter && styles.activeFilterButton]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text style={[styles.filterButtonText, activeFilter === filter && styles.activeFilterButtonText]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  filterButtonContainer: {
    marginBottom: 15,
  },
  filterButton: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  activeFilterButton: {
    backgroundColor: '#00c890',
  },
  filterButtonText: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
  },
  activeFilterButtonText: {
    color: '#fff',
  },
});

export default FAQSearchFilter; 