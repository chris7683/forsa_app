import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './HeaderStyles';

const Header = ({ navigation, title, showBackButton = false }) => {
  return (
    <View style={styles.headerContainer}>
      {showBackButton ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <AntDesign name="home" size={24} color="black" />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={{ width: 24 }} />
    </View>
  );
};

export default Header; 