import {Image, StyleSheet, View, Dimensions} from 'react-native';
import {Container} from '../../Components/ContainerV2';
import {Label} from '../../Components/Label';
import {Colors} from '../../Constants/Colors';
import {Rating} from '../../Components/Rating';
import {Button} from '../../Components/Button';
const {width, height} = Dimensions.get('screen');
export const DetailView = () => {
  let des =
    'A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.';
  return (
    <Container>
      <View style={styles.container}>
        <Image source={require('../../Assets/Book.png')} style={styles.image} />
        <Label
          text="Yves Saint Laurent"
          type="h1"
          textStyle={styles.bookName}
        />
        <Label text="Suzy Menkes" type="h3" textColor={Colors.MANATEE} />
        <Rating rating={4} styling={styles.rating} />
        <Label
          text={des}
          textColor={Colors.MANATEE}
          textStyle={styles.description}
        />
        <Button label="Buy Now for $46.99" onPress={() => {}} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    height: height / 2.5,
    resizeMode: 'contain',
  },
  bookName: {
    marginVertical: 14,
  },
  rating: {
    marginVertical: 8,
  },
  description: {
    textAlign: 'center',
  },
});
