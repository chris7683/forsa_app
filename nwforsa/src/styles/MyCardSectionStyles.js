import { StyleSheet } from 'react-native';

const MyCardSectionStyles = StyleSheet.create({
  cardSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: '#1a2e6b', // customColors.backgroundBlue
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
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
    backgroundColor: '#00c890', // customColors.cardGreen
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  activeStatusText: {
    fontSize: 12,
    color: '#fff',
  },
  cardNumber: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  cardLimits: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardLimitLabel: {
    fontSize: 14,
    color: '#fff',
  },
  limitValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  cardLimitValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 5,
  },
  expiryContainer: {
    alignItems: 'flex-end',
  },
  expiryText: {
    fontSize: 14,
    color: '#fff',
  },
  expiryDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 5,
  },
});

export default MyCardSectionStyles; 