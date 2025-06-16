import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './TerminationImportantNoticeStyles';

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

export default TerminationImportantNotice; 