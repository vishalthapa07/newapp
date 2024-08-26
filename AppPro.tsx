import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';

const AppPro = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello !!
        </Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end', // it moves our item from left to right in react native
    justifyContent: 'center', //moves our item from top to bottom in react native
    backgroundColor: '#FF0000',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});

export default AppPro;
