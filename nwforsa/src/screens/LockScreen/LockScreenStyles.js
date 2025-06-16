import { StyleSheet } from 'react-native';

const LockScreenStyles = StyleSheet.create({
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
  cardStatusContainer: {},
  cardStatusTitle: {},
  cardStatusText: {},
  selectActionContainer: {},
  sectionTitle: {},
  actionOption: {},
  actionTextContainer: {},
  actionTitle: {},
  actionDescription: {},
  importantNoticeContainer: {},
  sectionHeader: {},
  importantNoticeTitle: {},
  warningMessageContainer: {},
  warningMessageText: {},
  pleaseNoteTitle: {},
  noteItem: {},
  confirmButtonLock: {},
  confirmButtonUnlock: {},
  confirmButtonText: {},
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flex: 1,
  },
});

export default LockScreenStyles; 