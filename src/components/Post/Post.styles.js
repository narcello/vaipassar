import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
import {relativeWidth} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 18,
  },
  textContainer: {
    backgroundColor: colors.white,
    elevation: 5,
    padding: 11,
    borderRadius: 9,
    height: 144,
    width: relativeWidth(0.9),
  },
  textArea: {
    width: relativeWidth(0.8),
  },
  options: {
    position: 'absolute',
    right: 0,
  },
});
