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
    marginBottom: 15,
  },
  importantNoticeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#000',
  },
  noticeMessageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#ffebee',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 10,
  },
  noticeMessageText: {
    fontSize: 12,
    color: '#d32f2f',
    marginLeft: 5,
    flex: 1,
  },
  acknowledgementTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  acknowledgementItem: {
    fontSize: 12,
    color: '#555',
    marginBottom: 3,
  },
  termsText: {
    fontSize: 10,
    color: '#555',
    marginTop: 10,
  },
  confirmTerminationButton: {
    backgroundColor: '#d32f2f',
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