import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './ImportantNoticeSectionStyles';

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

export default ImportantNoticeSection; 