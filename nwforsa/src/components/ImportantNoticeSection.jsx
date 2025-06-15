import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ImportantNoticeSection = ({ selectedAction }) => {
  const isLock = selectedAction === 'lock';
  const isUnlock = selectedAction === 'unlock';

  const messageText = isLock
    ? 'Your card will be blocked temporarily until you unlock it.\nYou will not be able to make any transactions while your card is locked.'
    : 'Your card will be activated and you will be able to make transactions immediately after unlocking.';

  const buttonText = isLock ? 'Confirm Lock Card' : 'Confirm Unlock Card';
  const buttonStyle = isLock ? styles.confirmButtonLock : styles.confirmButtonUnlock;

  return (
    <View style={styles.importantNoticeContainer}>
      <View style={styles.sectionHeader}>
          <AntDesign name="warning" size={20} color="#f57c00" />
          <Text style={styles.importantNoticeTitle}>Important Notice</Text>
      </View>
      
      <View style={styles.warningMessageContainer}>
          <AntDesign name="warning" size={16} color="black" style={{ marginRight: 5 }} />
          <Text style={styles.warningMessageText}>{messageText}</Text>
      </View>
      
      <Text style={styles.pleaseNoteTitle}>Please note:</Text>
      <Text style={styles.noteItem}>• This action takes effect immediately</Text>
      <Text style={styles.noteItem}>• You can unlock your card anytime</Text>
      <Text style={styles.noteItem}>• Recurring payments may be affected if card is locked</Text>
      <Text style={styles.noteItem}>• Contact customer service if you need assistance</Text>

      <TouchableOpacity style={buttonStyle}>
        <Text style={styles.confirmButtonText}>{buttonText}</Text>
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
    marginBottom: 10,
  },
  importantNoticeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#000',
  },
  warningMessageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff3e0', // Light orange background
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 10,
  },
  warningMessageText: {
    fontSize: 12,
    color: '#555',
    marginLeft: 5,
    flex: 1,
  },
  pleaseNoteTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  noteItem: {
    fontSize: 12,
    color: '#555',
    marginBottom: 3,
  },
  confirmButtonLock: {
    backgroundColor: '#d32f2f', // Red color for lock
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  confirmButtonUnlock: {
    backgroundColor: '#4CAF50', // Green color for unlock
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

export default ImportantNoticeSection; 