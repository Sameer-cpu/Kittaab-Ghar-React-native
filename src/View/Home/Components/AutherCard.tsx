import {Image, StyleSheet} from 'react-native';

export const AutherCard = () => {
  return (
    <Image source={require('../../../Assets/img1.jpg')} style={styles.img} />
  );
};
const styles = StyleSheet.create({
  img: {height: 62, width: 62, borderRadius: 100},
});
