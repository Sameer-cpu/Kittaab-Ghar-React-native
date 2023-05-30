import {View, Image, StyleSheet} from 'react-native';
import {Label} from '../../../Components/Label';
import {truncateString} from '../../../Utils/helperMethd';

export const TrendingBookCard = () => {
  return (
    <View>
      <Image
        style={styles.container}
        source={require('../../../Assets/img1.jpg')}
      />
      <Label
        text={truncateString('The Power of Positive thinking', 11)}
        type="h3"
      />
    </View>
  );
};
('The Power of Positive thinking');

const styles = StyleSheet.create({
  container: {
    height: 124,
    width: 94,
    borderRadius: 8,
    marginBottom: 10,
  },
});
