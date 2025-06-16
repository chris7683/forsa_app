import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 15,
    marginTop: 15,
    padding: 15,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  amountLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  amountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  amountInput: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 10,
  },
  amountInputArrows: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  maximumAmount: {
    fontSize: 12,
    color: '#666',
    marginBottom: 15,
  },
  quickSelectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quickSelectButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickSelectButton: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 10,
    width: '48%', // Approx half width to fit two buttons per row
    alignItems: 'center',
  },
  quickSelectButtonText: {
    fontSize: 14,
    color: '#000',
  },
});

export default styles;