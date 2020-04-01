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
  button: {
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 20,
    padding: 10,
    paddingBottom: 11,
    bottom: 200,
    position: 'absolute',
  },
  text: {
    fontSize: 20,
  },
});
