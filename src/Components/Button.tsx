import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Label} from './Label';
import {Colors} from '../Constants/Colors';
import {BUTTON_PROPS} from '../Types/Components';

export const Button: React.FC<BUTTON_PROPS> = ({label = '', onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Label text={label} type="h2" textColor={Colors.WHITE} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BURNT_SIENNA,
    borderRadius: 16,
  },
});
