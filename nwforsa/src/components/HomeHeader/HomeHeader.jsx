import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import styles from './HomeHeaderStyles';

const HomeHeader = ({ userName }) => {
  return (
    <View style={styles.headerContainerScrollable}>
      <View style={styles.headerContent}>
        <FontAwesome name="key" size={24} color="#fff" style={styles.keyIconDynamic} />

        <View style={styles.headerTextContainer}>
          <Text style={styles.headerGreetingText}>Hello,</Text>
          <Text style={styles.headerNameText}>{userName || 'Guest'}!</Text>
        </View>

        <View style={styles.headerIconsDynamic}>
          <View style={styles.headerIconCircleDynamic}>
            <AntDesign name="search1" size={20} color="#000" />
          </View>
          <View style={styles.headerIconCircleDynamic}>
            <AntDesign name="heart" size={20} color="#000" />
          </View>
          <View style={styles.headerIconCircleDynamic}>
            <AntDesign name="bell" size={20} color="#000" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader; 