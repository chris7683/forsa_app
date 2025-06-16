import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  transactionsListContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 15,
    marginTop: 15,
    padding: 15,
    borderRadius: 8,
  },
  transactionItem: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
  },
  transactionItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  transactionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  transactionCategoryStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  transactionCategory: {
    fontSize: 12,
    color: '#777',
    marginRight: 5,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 15,
  },
  statusCompleted: {
    backgroundColor: '#e6ffe6', // Light green
  },
  statusPending: {
    backgroundColor: '#fff0e6', // Light orange
  },
  statusText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#00c853', // Green
  },
  transactionAmountDate: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amountCredit: {
    color: '#00c853', // Green for credits
  },
  amountDebit: {
    color: '#d32f2f', // Red for debits
  },
  dropdownIcon: {
    marginTop: 5,
  },
  transactionDate: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
  },
  transactionDetailsPreview: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 10,
  },
  previewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  previewIcon: {
    marginRight: 10,
  },
  previewLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#555',
    width: 120, // Adjust as needed
  },
  previewValue: {
    fontSize: 13,
    color: '#333',
    flex: 1,
  },
  balanceAfterRow: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
});

export default styles; 