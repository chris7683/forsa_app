import { StyleSheet } from 'react-native';

const CardScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light grey background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  scrollViewContent: {
    flex: 1,
  },
  stepIndicatorContainer: {},
  stepCircle: {},
  activeStepCircle: {},
  stepText: {},
  activeStepText: {},
  cardDetailsContainer: {},
  sectionHeader: {},
  sectionTitle: {},
  label: {},
  cardInput: {},
  readyMessage: {},
  activateButton: {},
  activateButtonText: {},
  cardSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  cardSelectButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selectedButton: {
    backgroundColor: '#00c890', // Green color for selected button
    borderColor: '#00c890',
  },
  cardSelectButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  selectedButtonText: {
    color: '#fff',
  },
});

export default CardScreenStyles; 