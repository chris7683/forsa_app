import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';
import FAQHeader from '../../components/FAQHeader/FAQHeader';
import FAQSearchFilter from '../../components/FAQSearchFilter/FAQSearchFilter';
import FAQList from '../../components/FAQList/FAQList';
import FAQHelpSection from '../../components/FAQHelpSection/FAQHelpSection';
import styles from './FAQScreenStyles';
import { getFAQs } from '../../services/api';
import { useApi } from '../../hooks/useApi';
import { AntDesign } from '@expo/vector-icons';
import Header from '../../components/Header/Header';

const FAQScreen = ({ navigation }) => {
  const [expandedQuestionId, setExpandedQuestionId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  
  const { data: faqs, loading, error, execute: fetchFAQs } = useApi(getFAQs);

  useEffect(() => {
    fetchFAQs(activeFilter);
  }, [activeFilter]);

  const filteredFaqs = faqs?.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const toggleExpand = (id) => {
    setExpandedQuestionId(expandedQuestionId === id ? null : id);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} title="FAQ" />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#00c890" />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} title="FAQ" />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error.message}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="FAQ" />
      <ScrollView style={styles.scrollViewContent}>
        <FAQSearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <FAQList
          faqs={filteredFaqs}
          expandedQuestionId={expandedQuestionId}
          toggleExpand={toggleExpand}
        />
        <FAQHelpSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FAQScreen; 