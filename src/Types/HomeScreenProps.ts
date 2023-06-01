import {StyleProp, ViewStyle} from 'react-native';

export interface SECTION_HEADER_PROPS {
  header: string;
  onSeeAll?: (() => void) | undefined;
  styling?: StyleProp<ViewStyle>;
}

export interface CATEGORY {
  category: string;
}
export interface RENDER_CATEGORIES {
  index: number;
  item: CATEGORY;
}

export interface CATEGORY_ROW_PROPS {
  item: CATEGORY[];
}
export interface TRENDING_BOOK_PROPS {
  category: string;
  bookName: string;
  description: string;
}
export interface RENDER_TRENDING_BOOK_PROPS {
  item: TRENDING_BOOK_PROPS;
  index: number;
}

//Componets Props

export interface CATEGORY_CART_PROPS {
  text: string;
  onPress: () => void;
}

export interface CATEGOR_SECTION_PROPS {
  data: CATEGORY_ROW_PROPS[];
  onSelectCategory: (e: CATEGORY) => void;
}

export interface TRENDING_BOOK_CARD_PROPS {
  bookName: string;
  onPress: () => void;
  styling?: StyleProp<ViewStyle>;
}
