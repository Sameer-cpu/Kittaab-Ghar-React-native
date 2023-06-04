import React, {FC} from 'react';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {CONTAINER_PROPS} from '../Types/Components';
import {Colors} from '../Constants/Colors';
export const Container: FC<CONTAINER_PROPS> = ({children}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innerContainer}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
});
