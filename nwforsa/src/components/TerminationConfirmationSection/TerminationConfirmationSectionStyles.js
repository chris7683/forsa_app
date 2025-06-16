import { StyleSheet } from 'react-native';

const TerminationConfirmationSectionStyles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: '#ff4d4f', // Red color for termination
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonDisabled: {
    backgroundColor: '#ccc',
  },
  confirmButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TerminationConfirmationSectionStyles; 