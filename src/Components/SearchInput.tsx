import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors} from '../Constants/Colors';
import {SEARCH_INPUT_PROPS} from '../Types/Components';

export const SearchInput: React.FC<SEARCH_INPUT_PROPS> = ({
  onChangeText,
  placeholder = 'Titles,authors or topics',
}) => {
  return (
    <View style={styles.container}>
      <Text>0</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: Colors.GALLERY,
    borderRadius: 14,
  },
  input: {
    flex: 1,
    paddingLeft: 9,
  },
});
