import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  balanceExpensesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 15,
  },
  balanceCard: {
    flex: 1,
    flexBasis: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginRight: 10,
  },
  expensesCard: {
    flex: 1,
    flexBasis: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginLeft: 10,
  },
  balanceExpensesLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  balanceValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  monthlyDetails: {
    marginTop: 5,
  },
  monthlyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  netRow: {
    marginTop: 4,
    paddingTop: 4,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  monthlyLabel: {
    fontSize: 12,
    color: '#666',
  },
  monthlyValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  expenseValue: {
    color: '#d32f2f', // Red for expenses
  },
  incomeValue: {
    color: '#00c853', // Green for income
  },
});

export default styles; 