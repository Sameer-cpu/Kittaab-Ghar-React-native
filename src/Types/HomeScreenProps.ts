export interface SECTION_HEADER_PROPS {
  header: string;
  onSeeAll?: (() => void) | undefined;
}

export interface CATEGORY {
  category: string;
}
export interface RENDER_CATEGORIES {
  index: number;
  item: CATEGORY;
}

//Componets Props

export interface CATEGORY_CART_PROPS {
  text: string;
}
