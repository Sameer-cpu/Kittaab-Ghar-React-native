import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Label} from '../../../Components/Label';
import {Colors} from '../../../Constants/Colors';
import {SECTION_HEADER_PROPS} from '../../../Types/HomeScreenProps';

export const SectionHeader: React.FC<SECTION_HEADER_PROPS> = ({
  header = '',
  onSeeAll,
  styling,
}) => {
  return (
    <View style={[styles.container, styling]}>
      <Label text={header} type="h1" />
      {onSeeAll && (
        <TouchableOpacity onPress={onSeeAll}>
          <Label text="See All" type="h2" textColor={Colors.MANATEE} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
