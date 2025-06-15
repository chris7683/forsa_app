import { StyleSheet } from 'react-native';

const BNPLSummaryStyles = StyleSheet.create({
  bnplContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1a2e6b', // customColors.backgroundBlue
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 15,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  bnplLabel: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  bnplValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default BNPLSummaryStyles; 