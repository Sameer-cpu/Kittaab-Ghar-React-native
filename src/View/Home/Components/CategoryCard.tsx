import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../Constants/Colors';
import {Label} from '../../../Components/Label';

export const CategoryCard = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../Assets/img1.jpg')} style={styles.img} />
      <Label
        type="h4"
        text="Motivation & Inspiration"
        textColor={Colors.SCARPA_FLOW}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
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
