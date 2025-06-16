import { StyleSheet } from 'react-native';

const CardServicesSectionStyles = StyleSheet.create({
  cardServicesSectionWhiteBackground: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  sectionTitleWhite: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  cardServiceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardServiceTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  cardServiceText: {
    fontSize: 16,
    color: '#000',
  },
  cardServiceDescription: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
});

export default CardServicesSectionStyles; 