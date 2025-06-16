import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  reasonContainer: {
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#000',
  },
  reasonOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
  },
  reasonTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  reasonLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  reasonDescription: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
});

export default styles; 