import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {resetNavigation, navigate} from '../../navigator';

export const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      // navigate('Login', {});
      // props.navigation.navigate('Login');
      resetNavigation('Login', {});
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
