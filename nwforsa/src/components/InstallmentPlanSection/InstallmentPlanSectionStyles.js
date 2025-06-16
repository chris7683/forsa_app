import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  installmentSectionContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 15,
    marginTop: 15,
    padding: 15,
    borderRadius: 8,
  },
  installmentSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  installmentSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  installmentOptionContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selectedInstallmentOption: {
    borderColor: '#004AAD',
  },
  installmentOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#888',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderColor: '#004AAD',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#004AAD',
  },
  planDetailsContainer: {
    flex: 1,
  },
  planMonthsText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  planPaymentText: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
  },
  planInterestText: {
    fontSize: 13,
    color: '#555',
    marginTop: 2,
  },
  planInterestValueText: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default styles; 