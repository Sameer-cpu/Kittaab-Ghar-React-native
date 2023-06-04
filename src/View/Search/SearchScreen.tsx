import {StyleSheet, Text, View} from 'react-native';
import {Container} from '../../Components/ContainerV2';
import {SearchInput} from '../../Components/SearchInput';
import {Label} from '../../Components/Label';
import {BookCard} from './Components/BookCard';
import {FlatList} from 'react-native';
import {Space} from '../../Components/Space';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Types/Routes';

type Props = NativeStackScreenProps<RootStackParamList, 'SearchScreen'>;

export const SearchScreen: React.FC<Props> = ({navigation}): JSX.Element => {
  const renderBooks = (): JSX.Element => {
    return (
      <BookCard
        onPress={() => {
          console.log('sadas');

          navigation.navigate('DetailView');
        }}
      />
    );
  };
  return (
    <Container>
      <SearchInput
        onChangeText={(e: string) => {
          console.log({e});
        }}
        styling={styles.searchBar}
      />
      <Label text="All :" type="h2" />
      <FlatList
        key={'trendingBooks'}
        contentContainerStyle={{paddingBottom: 30}}
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={(): JSX.Element => <Space y={14} />}
        renderItem={renderBooks}
        keyExtractor={(item: number, index: number) => `${item}_${index}`}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {},
  searchBar: {
    marginVertical: 20,
  },
});
