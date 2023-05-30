import {StyleSheet, Text, View} from 'react-native';

export const SignIn = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>SignIn Screen</Text>
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
