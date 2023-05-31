import {StyleSheet, Text} from 'react-native';
import {Colors} from '../Constants/Colors';
import {LABEL_PROPS} from '../Types/Components';

export const Label: React.FC<LABEL_PROPS> = ({
  type,
  text = '',
  textColor,
  textStyle,
}) => {
  const renderText = () => {
    switch (type) {
      case 'h1':
        return (
          <Text
            style={[
              styles.h1,
              textStyle,
              {color: textColor ?? Colors.CHARADE},
            ]}>
            {text}
          </Text>
        );
      case 'h2':
        return (
          <Text
            style={[
              styles.h2,
              textStyle,
              {color: textColor ?? Colors.CHARADE},
            ]}>
            {text}
          </Text>
        );
      case 'h3':
        return (
          <Text
            style={[
              styles.h3,
              textStyle,
              {color: textColor ?? Colors.CHARADE},
            ]}>
            {text}
          </Text>
        );
      case 'h4':
        return (
          <Text
            style={[
              styles.h4,
              textStyle,
              {color: textColor ?? Colors.CHARADE},
            ]}>
            {text}
          </Text>
        );

      default:
        return (
          <Text
            style={[
              styles.para,
              textStyle,
              textColor ? {color: textColor} : {},
            ]}>
            {text}
          </Text>
        );
    }
  };

  return renderText();
};

const styles = StyleSheet.create({
  h1: {
    fontWeight: '500',
    fontSize: 21,
    color: Colors.CHARADE,
  },
  h2: {
    fontWeight: '500',
    fontSize: 16,
    color: Colors.CHARADE,
  },
  h3: {
    fontWeight: '500',
    fontSize: 14,
    color: Colors.MANATEE,
  },
  h4: {
    fontWeight: '500',
    fontSize: 12,
    color: Colors.MANATEE,
  },
  para: {
    fontWeight: '400',
    fontSize: 14,
  },
});
