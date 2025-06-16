import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  filterContainer: {
    marginBottom: 15,
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    marginRight: 10,
  },
  activeFilterButton: {
    backgroundColor: '#54A59B', // Teal/greenish color from screenshot
    borderColor: '#54A59B',
  },
  filterButtonText: {
    fontSize: 14,
    color: '#000',
  },
  activeFilterButtonText: {
    color: '#fff',
  },
});

export default styles; 