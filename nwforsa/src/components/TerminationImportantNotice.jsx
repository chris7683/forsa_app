import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const TerminationImportantNotice = () => {
  return (
    <View style={styles.importantNoticeContainer}>
      <View style={styles.sectionHeader}>
        <AntDesign name="warning" size={20} color="#ff0000" />
        <Text style={styles.importantNoticeTitle}>Important Notice</Text>
      </View>
      <View style={styles.noticeMessageContainer}>
        <AntDesign name="warning" size={16} color="black" style={{ marginRight: 5 }} />
        <Text style={styles.noticeMessageText}>
          Please visit the nearest Forsa branch to receive a new card. This action cannot be undone.
        </Text>
      </View>
      <Text style={styles.acknowledgementTitle}>By proceeding, you acknowledge that:</Text>
      <Text style={styles.acknowledgementItem}>• Your current card will be permanently terminated</Text>
      <Text style={styles.acknowledgementItem}>• You will need to visit a branch to get a replacement card</Text>
      <Text style={styles.acknowledgementItem}>• A new card fee may apply as per our terms and conditions</Text>
      <Text style={styles.acknowledgementItem}>• You will need to bring valid ID and this termination confirmation</Text>
      <Text style={styles.termsText}>
        Terms & Conditions Applied. For full terms and conditions, please visit our website or contact customer service.
      </Text>
      <TouchableOpacity style={styles.confirmTerminationButton}>
        <Text style={styles.confirmButtonText}>Confirm Card Termination</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  importantNoticeContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  importantNoticeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#000',
  },
  noticeMessageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#ffebee',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 10,
  },
  noticeMessageText: {
    fontSize: 12,
    color: '#d32f2f',
    marginLeft: 5,
    flex: 1,
  },
  acknowledgementTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  acknowledgementItem: {
    fontSize: 12,
    color: '#555',
    marginBottom: 3,
  },
  termsText: {
    fontSize: 10,
    color: '#555',
    marginTop: 10,
  },
  confirmTerminationButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  confirmButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TerminationImportantNotice; 