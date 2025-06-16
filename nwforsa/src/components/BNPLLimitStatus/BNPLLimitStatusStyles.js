import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 15,
    marginTop: 15,
    padding: 15,
    borderRadius: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  limitDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  limitLabel: {
    fontSize: 14,
    color: '#666',
  },
  limitValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#e0e0e0',
    marginTop: 10,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#00c890',
    borderRadius: 4,
  },
});

export default styles; 