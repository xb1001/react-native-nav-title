/**
 * 导航栏封装
 */
import React from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const NavTitle = ({
  title = '',
  isBack = true,
  backTitle = '',
  leftArea = null,
  rightArea = null,
  navStyle = null,
  titleStyle = null,
  leftIconStyle = null,
  leftTitleStyle = null,
  statusBarColor = 'transparent',
  onBack
}) => {
  // 导航栏样式
  const _navContainer = {...styles.navContainer, ...navStyle};
  // 返回箭头样式
  const _leftIconStyle = {...styles.leftIcon, ...leftIconStyle};
  // 返回标题样式
  const _leftTitleStyle = {...styles.leftTitle, ...leftTitleStyle};
  // 标题样式
  const _titleStyle = {...styles.title, ...titleStyle};

  const renderLeft = () => {
    if (!React.isValidElement(leftArea)) {
      leftArea = !isBack ? null : (
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => onBack()}>
          <Image
            style={_leftIconStyle}
            source={require('@/src/assets/images/icons/left_arrow.png')}
          />
          <Text style={_leftTitleStyle}>{backTitle}</Text>
        </TouchableOpacity>
      );
    }
    return leftArea;
  };

  const renderTitle = () => {
    if (
      !React.isValidElement(title) &&
      (title || title === '' || title === 0)
    ) {
      title = (
        <Text style={_titleStyle} numberOfLines={1}>
          {title}
        </Text>
      );
    }
    return title;
  };

  const renderRight = () => {
    if (!React.isValidElement(rightArea)) {
      rightArea = null;
    }
    return rightArea;
  };

  return (
    <View style={_navContainer}>
      <StatusBar
        backgroundColor={statusBarColor}
        translucent={true}
        barStyle={'dark-content'}
      />
      <View style={styles.leftArea}>{renderLeft()}</View>
      <View style={styles.centerArea}>{renderTitle()}</View>
      <View style={styles.rightArea}>{renderRight()}</View>
    </View>
  );
};
export default NavTitle;
