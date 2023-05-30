import {StyleSheet, Text, View} from 'react-native';

export const Registeration = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Registeration Screen</Text>
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
