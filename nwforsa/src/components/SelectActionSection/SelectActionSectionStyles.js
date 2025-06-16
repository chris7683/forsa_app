import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  selectActionContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  actionOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
  },
  actionTextContainer: {
    marginLeft: 10,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  actionDescription: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
});

export default styles; 