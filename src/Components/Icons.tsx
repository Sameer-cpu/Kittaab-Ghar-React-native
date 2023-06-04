import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

const defaultSettings = {
  color: '#009df5',
  size: 23,
};
interface Props {
  icon?: {
    name?: string;
    color?: string;
    size?: number;
    style?: {};
  };
  onPress?: () => void;
}
export const Icon = ({icon, onPress}: Props) => {
  const _setting = {...defaultSettings, ...icon};
  const {name = '', color, size, style = {}} = _setting || {};
  const [provider, iconName] = name?.split('/') || [];

  switch (provider) {
    case 'ad':
      return (
        <AntDesign
          onPress={onPress}
          name={iconName || ''}
          color={color || ''}
          size={size}
          style={style}
        />
      );
    case 'et':
      return (
        <Entypo
          onPress={onPress}
          name={iconName || ''}
          color={color || ''}
          size={size}
          style={style}
        />
      );
    case 'ei':
      return (
        <EvilIcons
          onPress={onPress}
          name={iconName || ''}
          color={color || ''}
          size={size}
          style={style}
        />
      );
    case 'ft':
      return (
        <Feather
          onPress={onPress}
          name={iconName || ''}
          color={color || ''}
          size={size}
          style={style}
        />
      );
    case 'fa':
      return (
        <FontAwesome
          onPress={onPress}
          name={iconName || ''}
          color={color || ''}
          size={size}
          style={style}
        />
      );
    case 'fa5':
      return (
        <FontAwesome5
          onPress={onPress}
          name={iconName || ''}
          color={color || ''}
          size={size}
          style={style}
        />
      );
    case 'ft':
      return (
        <Fontisto
          onPress={onPress}
          name={iconName || ''}
          color={color || ''}
          size={size}
          style={style}
        />
      );
    case 'fd':
      return (
        <Foundation
          onPress={onPress}
          name={iconName || ''}
          color={color || ''}
          size={size}
          style={style}
        />
      );
    case 'ii':
      return (
        <Ionicons
          onPress={onPress}
          name={iconName || ''}
          color={color || ''}
          size={size}
          style={style}
        />
      );
    case 'mc':
      return (
        <MaterialCommunityIcons
          onPress={onPress}
          name={iconName || ''}
          color={color || ''}
          size={size}
          style={style}
        />
      );
    case 'mi':
      return (
        <MaterialIcons
          onPress={onPress}
          name={iconName || ''}
          color={color || ''}
          size={size}
          style={style}
        />
      );
    case 'oi':
      return (
        <Octicons
          onPress={onPress}
          name={iconName || ''}
          color={color || ''}
          size={size}
          style={style}
        />
      );
    case 'sli':
      return (
        <SimpleLineIcons
          onPress={onPress}
          name={iconName || ''}
          color={color || ''}
          size={size}
          style={style}
        />
      );
    case 'zi':
      return (
        <Zocial
          onPress={onPress}
          name={iconName || ''}
          color={color || ''}
          size={size}
          style={style}
        />
      );

    default:
      return (
        <MaterialIcons
          onPress={onPress}
          name={'favorite'}
          color={'purple'}
          size={30}
        />
      );
  }
};
