import React, {FC, ReactNode} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {CONTAINER_PROPS} from '../Types/Components';
export const Container: FC<CONTAINER_PROPS> = ({children}) => {
  return <SafeAreaView style={styles.mainContainer}>{children}</SafeAreaView>;
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
});
