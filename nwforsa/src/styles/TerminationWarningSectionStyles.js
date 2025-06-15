import { StyleSheet } from 'react-native';

const TerminationWarningSectionStyles = StyleSheet.create({
  warningMessageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff3e0', // Light orange background
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  warningMessageText: {
    fontSize: 12,
    color: '#ff9800',
    marginLeft: 5,
    flex: 1,
  },
});

export default TerminationWarningSectionStyles; 