import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, Switch } from 'react-native';
import LockScreenHeader from '../../components/LockScreenHeader/LockScreenHeader';
import SelectActionSection from '../../components/SelectActionSection/SelectActionSection';
import CardStatusSection from '../../components/CardStatusSection/CardStatusSection';
import ImportantNoticeSection from '../../components/ImportantNoticeSection/ImportantNoticeSection';
import styles from './LockScreenStyles';
import { getCardStatus, lockCard, unlockCard } from '../../services/api';
import { useApi } from '../../hooks/useApi';

const LockScreen = ({ navigation }) => {
  const [isLocked, setIsLocked] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);
  const [cardStatus, setCardStatus] = useState('Loading...');

  const { data: statusData, loading, error, execute: fetchCardStatus } = useApi(getCardStatus);
  const { loading: lockLoading, error: lockError, execute: executeLockCard } = useApi(lockCard);
  const { loading: unlockLoading, error: unlockError, execute: executeUnlockCard } = useApi(unlockCard);

  useEffect(() => {
    if (statusData) {
      setIsLocked(statusData.isLocked);
      setCardStatus(statusData.isLocked ? 'Locked' : 'Unlocked');
    }
  }, [statusData]);

  useEffect(() => {
    fetchCardStatus();
  }, []);

  const toggleLock = async () => {
    if (isLocked) {
      await executeUnlockCard();
    } else {
      await executeLockCard();
    }
    setIsLocked(!isLocked);
    setCardStatus(isLocked ? 'Unlocked' : 'Locked');
    setSelectedAction(isLocked ? 'Unlock My Card' : 'Lock My Card');
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading card status...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Error: {error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <LockScreenHeader />
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <CardStatusSection status={cardStatus} toggleLock={toggleLock} isLocked={isLocked} />
          <SelectActionSection selectedAction={selectedAction} onActionSelect={setSelectedAction} />
          {selectedAction && (
            <ImportantNoticeSection selectedAction={selectedAction} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LockScreen; 