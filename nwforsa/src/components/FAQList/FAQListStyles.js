import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  faqList: {},
  faqItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden',
  },
  faqQuestionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  questionIconContainer: {
    marginRight: 10,
  },
  questionTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  questionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  questionCategory: {
    fontSize: 10,
    color: '#555',
  },
  answerContainer: {
    padding: 15,
    paddingTop: 0,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  answerText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});

export default styles; 