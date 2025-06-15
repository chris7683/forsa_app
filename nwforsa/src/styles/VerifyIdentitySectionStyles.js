import { StyleSheet } from 'react-native';

const VerifyIdentitySectionStyles = StyleSheet.create({
  verifyIdentityContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  otpMessageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#e0f7fa', // Light blue background for message
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  otpMessage: {
    fontSize: 12,
    color: '#555',
    marginLeft: 5,
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#000',
    marginBottom: 15,
    backgroundColor: '#eee', // Light grey background for input
  },
  resendOtpText: {
    fontSize: 14,
    color: '#004AAD', // Dark blue for resend text
    textAlign: 'center',
    marginBottom: 20,
  },
  verifyButton: {
    backgroundColor: '#00c890', // Use the green color from App.tsx
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  verifyButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default VerifyIdentitySectionStyles; 