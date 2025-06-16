import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardSection: {
    backgroundColor: '#f0f0f0',
    paddingTop: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  cardContainer: {
    backgroundColor: '#004AAD', // Dark blue from screenshot
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardIcon: {
    marginRight: 10,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  activeStatus: {
    backgroundColor: '#00c890',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
  },
  activeStatusText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  cardLimits: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  cardLimitLabel: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.8,
  },
  limitValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  cardLimitValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 5,
  },
  expiryContainer: {
    alignItems: 'flex-end',
  },
  expiryText: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.8,
  },
  expiryDate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 2,
  },
});

export default styles; 