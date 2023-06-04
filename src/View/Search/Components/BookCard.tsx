import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Label} from '../../../Components/Label';
import {Colors} from '../../../Constants/Colors';
import {truncateString} from '../../../Utils/helperMethd';
import {Icon} from '../../../Components/Icons';
import {BookCardProps} from '../../../Types/SearchScreenProps';

export const BookCard: React.FC<BookCardProps> = ({onPress}): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <Image
          source={require('../../../Assets/Book.png')}
          resizeMode="cover"
          style={styles.img}
        />
        <View style={styles.bookContent}>
          <Label
            text={truncateString('The Da Vinadasdadasdsadasgi Code', 25)}
            type="h3"
          />
          <Label
            text={truncateString('Dan Brown', 15)}
            type="h4"
            textColor={Colors.MANATEE}
          />
          <View style={styles.row}>
            {[1, 2, 3, 4, 5].map((): JSX.Element => {
              return (
                <Icon
                  icon={{name: 'ad/staro', size: 14, style: styles.starIcon}}
                />
              );
            })}
          </View>
        </View>
      </View>
      <Icon icon={{name: 'ii/bookmark-outline', style: styles.addToFavIcon}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 4,
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  img: {
    height: 85,
    width: 57,
  },
  row: {
    flexDirection: 'row',
  },
  bookContent: {
    justifyContent: 'space-evenly',
    marginLeft: 10,
  },
  addToFavIcon: {
    color: Colors.MANATEE,
    paddingTop: 5,
    paddingRight: 5,
  },
  starIcon: {
    marginRight: 4,
  },
});
