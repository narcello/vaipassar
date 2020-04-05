import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 30,
    backgroundColor: colors.blue,
    borderRadius: 30,
    elevation: 8,
  },
  content: {
    fontSize: 40,
    color: 'white',
    transform: [{translateY: -3}],
  },
});
