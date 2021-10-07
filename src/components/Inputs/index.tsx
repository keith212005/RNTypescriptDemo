import React, {memo} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

interface InputProps {}

const Input = (props: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput {...props} />
      <Text>Validation text</Text>
    </View>
  );
};

export default memo(Input);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
