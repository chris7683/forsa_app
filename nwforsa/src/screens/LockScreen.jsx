import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import LockScreenHeader from '../components/LockScreenHeader';
import CardStatusSection from '../components/CardStatusSection';
import SelectActionSection from '../components/SelectActionSection';
import ImportantNoticeSection from '../components/ImportantNoticeSection';
import LockScreenStyles from '../styles/LockScreenStyles';
import { getUserProfile, lockCard, unlockCard } from '../services/api';
import { useApi } from '../hooks/useApi';
import Header from '../components/Header';

const LockScreen = ({ navigation }) => {
  const [selectedAction, setSelectedAction] = useState(null);
  
  const { data: userProfile, loading, error, execute: fetchUserProfile } = useApi(getUserProfile);
  const { execute: executeLockCard } = useApi(lockCard);
  const { execute: executeUnlockCard } = useApi(unlockCard);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleActionSelect = (action) => {
    setSelectedAction(action);
  };

  const handleConfirmAction = async () => {
    if (!selectedAction) return;

    try {
      if (selectedAction === 'lock') {
        await executeLockCard();
      } else {
        await executeUnlockCard();
      }
      // Handle success (e.g., show success message, navigate back)
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={LockScreenStyles.container}>
        <View style={LockScreenStyles.loadingContainer}>
          <ActivityIndicator size="large" color="#00c890" />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={LockScreenStyles.container}>
        <View style={LockScreenStyles.errorContainer}>
          <Text style={LockScreenStyles.errorText}>{error.message}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={LockScreenStyles.container}>
      <Header navigation={navigation} title="Lock Card" />
      <ScrollView style={LockScreenStyles.scrollViewContent}>
        <LockScreenHeader />
        <CardStatusSection userProfile={userProfile} />
        <SelectActionSection
          selectedAction={selectedAction}
          onActionSelect={handleActionSelect}
          onConfirm={handleConfirmAction}
        />
        {selectedAction && <ImportantNoticeSection selectedAction={selectedAction} />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LockScreen; 