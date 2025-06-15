import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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

const styles = StyleSheet.create({
  helpSectionContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  helpSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  helpSectionDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
    lineHeight: 20,
  },
  contactButton: {
    backgroundColor: '#00c890',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  contactButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FAQHelpSection; 