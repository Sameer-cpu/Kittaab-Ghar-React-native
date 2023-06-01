import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {CATEGOR_SECTION_PROPS, CATEGORY} from '../../../Types/HomeScreenProps';
import {CategoryCard} from './CategoryCard';

export const CategorySection: React.FC<CATEGOR_SECTION_PROPS> = ({
  data,
  onSelectCategory,
}) => {
  if (!data.length) {
    return null;
  }

  const renderRowsData = (): JSX.Element => {
    return (
      <>
        {data.map((row, index): JSX.Element | null => {
          if (Array.isArray(row)) {
            return (
              <View key={index} style={styles.rows}>
                {row.map(
                  (item: CATEGORY, itemIndex: number): JSX.Element => (
                    <CategoryCard
                      text={item.category}
                      key={itemIndex}
                      onPress={() => {
                        onSelectCategory(item);
                      }}
                    />
                  ),
                )}
              </View>
            );
          }
          return null;
        })}
      </>
    );
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View>{renderRowsData()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rows: {
    flexDirection: 'row',
  },
});
