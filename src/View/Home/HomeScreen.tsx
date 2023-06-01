import {FlatList, StyleSheet} from 'react-native';
import {Container} from '../../Components/Container';
import categoryData from '../../Constants/BookCategorys.json';
import trendingBookData from '../../Constants/Trernding.json';
import {generateRows} from '../../Utils/helperMethd';
import {CategorySection} from './Components/CategorySection';
import {
  CATEGORY_ROW_PROPS,
  RENDER_TRENDING_BOOK_PROPS,
  TRENDING_BOOK_PROPS,
} from '../../Types/HomeScreenProps';
import {SectionHeader} from './Components/SectionHeader';
import {useMemo} from 'react';
import {TrendingBookCard} from './Components/TrendingBookCard';
import {AutherCard} from './Components/AutherCard';
import {Space} from '../../Components/Space';

export const HomeScreen = () => {
  const list = useMemo(
    () => generateRows(3, categoryData) as CATEGORY_ROW_PROPS[],
    [categoryData],
  );

  const renderTrendingBook = ({
    item,
    index,
  }: RENDER_TRENDING_BOOK_PROPS): JSX.Element => {
    return (
      <TrendingBookCard
        key={index}
        bookName={item?.bookName}
        onPress={() => {}}
      />
    );
  };
  const renderBookAuther = (): JSX.Element => {
    return <AutherCard />;
  };

  return (
    <Container>
      <SectionHeader header="Categories" styling={styles.header} />
      <CategorySection data={list} onSelectCategory={e => {}} />
      <SectionHeader
        header="Trending Books"
        styling={styles.header}
        onSeeAll={() => {}}
      />
      <FlatList
        key={'trendingBooks'}
        data={Array.isArray(trendingBookData) ? trendingBookData : []}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={(): JSX.Element => <Space />}
        renderItem={renderTrendingBook}
        keyExtractor={(item: TRENDING_BOOK_PROPS, index: number) =>
          `${item.bookName}_${index}`
        }
      />
      <SectionHeader header="Top Authors" styling={styles.header} />
      <FlatList
        key={'topAuthors'}
        data={[1, 2, 3, 4, 5]}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={(): JSX.Element => <Space />}
        renderItem={renderBookAuther}
        keyExtractor={(item, index: number) => `${item}_${index}`}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 14,
    marginTop: 30,
  },
});
