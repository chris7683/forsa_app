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
});

export default CardScreenStyles; 