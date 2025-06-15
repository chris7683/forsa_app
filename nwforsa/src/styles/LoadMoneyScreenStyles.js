import { StyleSheet } from 'react-native';

const LoadMoneyScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light grey background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionContainer: {},
  sectionHeader: {},
  sectionTitle: {},
  limitDetails: {},
  limitLabel: {},
  limitValue: {},
  progressBarPlaceholder: {},
  amountLabel: {},
  amountInputContainer: {},
  amountInput: {},
  amountInputArrows: {},
  maximumAmount: {},
  quickSelectTitle: {},
  quickSelectButtons: {},
  quickSelectButton: {},
  quickSelectButtonText: {},
  installmentSectionContainer: {},
  installmentSectionHeader: {},
  installmentSectionTitle: {},
  installmentOptionContainer: {},
  installmentOptionContent: {},
  radioButton: {},
  planDetailsContainer: {},
  planMonthsText: {},
  planPaymentText: {},
  planInterestText: {},
  planInterestValueText: {},
  transferButton: {},
  transferButtonText: {},
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flex: 1,
  },
});

export default LoadMoneyScreenStyles; 