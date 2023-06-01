import {View} from 'react-native';
import {SPACE_PROPS} from '../Types/Components';

export const Space: React.FC<SPACE_PROPS> = ({x, y}) => {
  return <View style={{width: x ?? 8, height: y ?? 8}} />;
};
