import React, {FC, ReactNode} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {CONTAINER_PROPS} from '../Types/Components';
import {Colors} from '../Constants/Colors';
export const Container: FC<CONTAINER_PROPS> = ({children}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.innerContainer}>{children}</View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  innerContainer: {
    marginHorizontal: 16,
  },
});
