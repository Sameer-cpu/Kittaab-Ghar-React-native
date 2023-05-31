import {View} from 'react-native';
import {CATEGORY} from '../Types/HomeScreenProps';

const truncateString = (text: string, limit: number) => {
  let dotText = '';
  if (text.length > limit) {
    const splt = text.slice(0, limit);
    dotText = splt + '...';
  } else {
    dotText = text;
  }

  return dotText || '';
};

export {truncateString};
