import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  filterContainer: {
    marginBottom: 15,
  },
  filterButton: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  activeFilterButton: {
    backgroundColor: '#00c890',
  },
  filterButtonText: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
  },
  activeFilterButtonText: {
    color: '#fff',
  },
  searchIcon: {
    marginRight: 10,
  },
});

export default styles; 