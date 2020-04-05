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
      width: 10,
      height: 10,
      borderRadius: 6,
      backgroundColor: colors.white,
      margin: 1,
      opacity: active ? 0.9 : 0.61,
      elevation: 1,
    },
  });
