import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {height: 4, width: 4},
    textShadowRadius: 20,
  },
});
