import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../../Constants/Colors';
import {Label} from '../../../Components/Label';
import {CATEGORY_CART_PROPS} from '../../../Types/HomeScreenProps';

export const CategoryCard: React.FC<CATEGORY_CART_PROPS> = ({
  text = '',
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={require('../../../Assets/img1.jpg')} style={styles.img} />
      <Label type="h4" text={text} textColor={Colors.SCARPA_FLOW} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    marginRight: 8,
    flexDirection: 'row',
    backgroundColor: Colors.GALLERY,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  img: {height: 28, width: 28, marginRight: 10, borderRadius: 100},
});
