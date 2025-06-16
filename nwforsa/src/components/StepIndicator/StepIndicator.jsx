import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './StepIndicatorStyles';

const StepIndicator = ({ activeStep }) => {
  return (
    <View style={styles.stepIndicatorContainer}>
      <View style={[styles.step, activeStep >= 1 && styles.activeStep]}>
        <Text style={[styles.stepNumber, activeStep >= 1 && styles.activeStepNumber]}>1</Text>
        <Text style={[styles.stepLabel, activeStep >= 1 && styles.activeStepLabel]}>Enter Details</Text>
      </View>
      <View style={[styles.stepLine, activeStep >= 2 && styles.activeStepLine]} />
      <View style={[styles.step, activeStep >= 2 && styles.activeStep]}>
        <Text style={[styles.stepNumber, activeStep >= 2 && styles.activeStepNumber]}>2</Text>
        <Text style={[styles.stepLabel, activeStep >= 2 && styles.activeStepLabel]}>Verify OTP</Text>
      </View>
      <View style={[styles.stepLine, activeStep >= 3 && styles.activeStepLine]} />
      <View style={[styles.step, activeStep >= 3 && styles.activeStep]}>
        <Text style={[styles.stepNumber, activeStep >= 3 && styles.activeStepNumber]}>3</Text>
        <Text style={[styles.stepLabel, activeStep >= 3 && styles.activeStepLabel]}>Activate</Text>
      </View>
    </View>
  );
};

export default StepIndicator; 