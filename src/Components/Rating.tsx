import {StyleSheet, Text, View} from 'react-native';
import {Icon} from './Icons';
import {Colors} from '../Constants/Colors';
import {Label} from './Label';
import {RATING_PROPS} from '../Types/Components';

export const Rating: React.FC<RATING_PROPS> = ({
  rating = 0,
  styling = {},
}): JSX.Element => {
  return (
    <View style={[styles.box, styling]}>
      {[1, 2, 3, 4, 5].map((item: number): JSX.Element => {
        return (
          <Icon
            icon={{
              name:
                rating >= item
                  ? rating > item + 0.4 && rating < item + 1
                    ? 'fa/star-half-o'
                    : 'fa/star'
                  : 'fa/star-o',
              color: Colors.LIGHTING_YELLOW,
              size: 14,
              style: styles.icon,
            }}
          />
        );
      })}
      <Label text="4.5 / 5.0" textStyle={styles.label} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 10,
  },
  icon: {
    marginHorizontal: 2,
  },
});
