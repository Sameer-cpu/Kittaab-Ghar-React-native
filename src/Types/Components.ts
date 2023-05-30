import {ReactNode} from 'react';

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
}

export interface BUTTON_PROPS {
  label: string;
  onPress: () => void;
}
