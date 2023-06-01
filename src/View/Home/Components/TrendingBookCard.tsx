import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Label} from '../../../Components/Label';
import {truncateString} from '../../../Utils/helperMethd';
import {TRENDING_BOOK_CARD_PROPS} from '../../../Types/HomeScreenProps';

export const TrendingBookCard: React.FC<TRENDING_BOOK_CARD_PROPS> = ({
  bookName = '',
  onPress,
  styling,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styling]}>
      <Image
        style={styles.container}
        source={require('../../../Assets/img1.jpg')}
      />
      <Label
        text={truncateString(bookName, 11)}
        type="h3"
        textStyle={styles.text}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 124,
    width: 94,
    borderRadius: 8,
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
  },
});
