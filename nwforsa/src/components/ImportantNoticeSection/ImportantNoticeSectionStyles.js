import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  importantNoticeContainer: {
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
    marginBottom: 10,
  },
  importantNoticeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#000',
  },
  warningMessageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff3e0', // Light orange background
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 10,
  },
  warningMessageText: {
    fontSize: 12,
    color: '#555',
    marginLeft: 5,
    flex: 1,
  },
  pleaseNoteTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  noteItem: {
    fontSize: 12,
    color: '#555',
    marginBottom: 3,
  },
  confirmButtonLock: {
    backgroundColor: '#d32f2f', // Red color for lock
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  confirmButtonUnlock: {
    backgroundColor: '#4CAF50', // Green color for unlock
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  confirmButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles; 