import {
  NativeSyntheticEvent,
  Text,
  TextInputChangeEventData,
} from 'react-native';
import {Container} from '../../Components/ContainerV2';
import {SearchInput} from '../../Components/SearchInput';
import {Label} from '../../Components/Label';
import {Button} from '../../Components/Button';
import {CategoryCard} from './Components/CategoryCard';
import {SectionHeader} from './Components/SectionHeader';
import {TrendingBookCard} from './Components/TrendingBookCard';
import {AutherCard} from './Components/AutherCard';

export const HomeScreen = () => {
  const handleSearchInput = (val: string): void => {
    // Handle search input logic here
  };
  return (
    <Container>
      <Text>HomeScreen</Text>
      <SearchInput onChangeText={handleSearchInput} />
      <Label type="h4" text="Headings" />
      <Button onPress={() => {}} label="Buy Now for $46.99" />
      <CategoryCard />
      <SectionHeader header="Trending Books" onSeeAll={() => {}} />
      <TrendingBookCard />
      <AutherCard />
    </Container>
  );
};
