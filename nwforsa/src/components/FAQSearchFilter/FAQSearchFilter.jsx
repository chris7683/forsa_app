import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { mockFAQCategories } from '../../data/mockData';
import styles from './FAQSearchFilterStyles';

const FAQSearchFilter = ({ searchTerm, setSearchTerm, activeFilter, setActiveFilter }) => {
  const filterButtons = ['All', 'General Questions', 'Card Usage', 'Security', 'Fees & Charges', 'Technical Support'];

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search FAQs..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
        {mockFAQCategories.map((filter) => (
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
    </View>
  );
};

export default FAQSearchFilter; 