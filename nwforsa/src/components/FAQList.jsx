import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const FAQList = ({ faqs, expandedQuestionId, toggleExpand }) => {
  return (
    <View style={styles.faqList}>
      {faqs.map(faq => (
        <View key={faq.id} style={styles.faqItem}>
          <TouchableOpacity onPress={() => toggleExpand(faq.id)} style={styles.faqQuestionContainer}>
            <View style={styles.questionIconContainer}>
              <AntDesign name="questioncircleo" size={20} color="#00c890" />
            </View>
            <View style={styles.questionTextContainer}>
              <Text style={styles.questionText}>{faq.question}</Text>
              <Text style={styles.questionCategory}>{faq.category}</Text>
            </View>
            <AntDesign
              name={expandedQuestionId === faq.id ? 'up' : 'down'}
              size={16}
              color="#00c890"
            />
          </TouchableOpacity>
          {expandedQuestionId === faq.id && (
            <View style={styles.answerContainer}>
              <Text style={styles.answerText}>{faq.answer}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

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

export default FAQList; 