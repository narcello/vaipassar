import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = active =>
  StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      width: Dimensions.get('screen').width,
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      bottom: 50,
    },
    step: {
      width: active ? 12 : 10,
      height: active ? 12 : 10,
      borderRadius: 6,
      borderColor: colors.blue,
      backgroundColor: active ? colors.blue : 'white',
      borderWidth: 2,
      margin: 1,
    },
  });
