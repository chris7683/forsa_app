import { StyleSheet } from 'react-native';

const BalanceExpensesCardsStyles = StyleSheet.create({
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
  expensesValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default BalanceExpensesCardsStyles; 