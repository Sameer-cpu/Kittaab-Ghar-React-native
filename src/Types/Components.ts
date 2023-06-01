import {ReactNode} from 'react';
import {StyleProp, TextStyle} from 'react-native';

export interface CONTAINER_PROPS {
  children: ReactNode;
}

export interface SEARCH_INPUT_PROPS {
  placeholder?: string;
  onChangeText: (val: string) => void;
}

export interface LABEL_PROPS {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | undefined;
  text: string;
  textColor?: string | undefined;
  textStyle?: StyleProp<TextStyle>;
}

export interface BUTTON_PROPS {
  label: string;
  onPress: () => void;
}

export interface SPACE_PROPS {
  x?: number | undefined;
  y?: number | undefined;
}
