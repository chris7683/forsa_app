import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  stepIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  stepCircle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  activeStepCircle: {
    backgroundColor: '#4CAF50', // Green for active step
  },
  stepText: {
    fontSize: 14,
    color: '#fff',
  },
  activeStepText: {
    fontWeight: 'bold',
  },
});

export default styles; 