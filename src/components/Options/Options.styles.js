import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  dot: {
    width: 3,
    height: 3,
    backgroundColor: colors.black,
    opacity: 0.6,
    marginTop: 3.5,
  },
  optionsContainer: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  options: {
    position: 'absolute',
    flex: 1,
    width: 123,
    top: 40,
    right: 20,
    backgroundColor: colors.gray,
    elevation: 7,
  },
  option: {
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.yellow,
  },
  optionText: {
    color: colors.darkGray,
  },
});
