import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
import {relativeWidth} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    width: relativeWidth(0.9),
    height: 42,
    backgroundColor: colors.blue,
    borderRadius: 9,
    top: 6,
    padding: 11,
    elevation: 5,
  },
});
