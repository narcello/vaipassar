import {StyleSheet} from 'react-native';

export const FabStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 30,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8,
  },
  content: {
    fontSize: 40,
    color: 'white',
    transform: [{translateY: -3}],
  },
});
