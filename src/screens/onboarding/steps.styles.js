import {colors} from '../../styles/colors';
import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellow,
    height: Dimensions.get('screen').height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    top: 40,
    right: 40,
    position: 'absolute',
  },
  text: {
    fontSize: 20,
    color: colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {height: 4, width: 4},
    textShadowRadius: 20,
  },
});
