import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import useCachedResources from '../../hooks/useCachedResources';
import LoginAnimation from './animations';

const LoginScreen = () => {
  const { isLoadingComplete } = useCachedResources();

  if (!isLoadingComplete) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00c890" />
        <Text style={styles.loadingText}>Loading resources...</Text>
      </View>
    );
  }

  return (
    <LoginAnimation />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#888',
  },
  animationText: {
    fontSize: 20,
    color: '#00c890',
    fontWeight: 'bold',
  },
});

export default LoginScreen; 