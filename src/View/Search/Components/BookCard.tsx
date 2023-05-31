import {Image, StyleSheet, Text, View} from 'react-native';
import {Label} from '../../../Components/Label';
import {Colors} from '../../../Constants/Colors';
import {truncateString} from '../../../Utils/helperMethd';

export const BookCard = () => {
  return (
    <View style={styles.container}>
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
        <Text>Stard</Text>
      </View>
      <Text style={styles.addToFavIcon}>Icon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 4,
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
  },
  img: {
    height: 85,
    width: 57,
  },
  bookContent: {
    justifyContent: 'space-evenly',
    marginLeft: 10,
  },
  addToFavIcon: {},
});
