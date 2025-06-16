import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './FAQHelpSectionStyles';

const FAQHelpSection = () => {
  return (
    <View style={styles.helpSectionContainer}>
      <Text style={styles.helpSectionTitle}>Still need help?</Text>
      <Text style={styles.helpSectionDescription}>
        Can't find what you're looking for? Our customer support team is here to help you 24/7.
      </Text>
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.contactButtonText}>Contact Support</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FAQHelpSection; 