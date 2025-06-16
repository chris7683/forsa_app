import React, { useState } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './FAQListStyles';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const FAQListItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity onPress={toggleExpand} style={styles.itemContainer}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question}</Text>
        <AntDesign 
          name={expanded ? "up" : "down"} 
          size={16} 
          color="#555"
        />
      </View>
      {expanded && (
        <View style={styles.answerContainer}>
          <Text style={styles.answerText}>{answer}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const FAQList = ({ faqs }) => {
  return (
    <View style={styles.listContainer}>
      {faqs.map((faq, index) => (
        <FAQListItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </View>
  );
};

export default FAQList; 