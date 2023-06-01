/**
 * 导航栏样式
 */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
  },
  leftArea: {
    flex: 2,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftIcon: {
    width: 137 / 7,
    height: 68 / 7,
    marginHorizontal: 1,
  },
  leftTitle: {
    fontSize: 14,
    color: '#000',
  },
  centerArea: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightArea: {
    flex: 2,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#000',
  },
});

export default styles;
