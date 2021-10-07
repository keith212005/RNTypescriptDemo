/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

import {Icon, Avatar} from 'react-native-elements';
//@ts-ignore
// import {commonStyles} from '@resources';

import {useGlobalStyles} from '../resources';

export const RenderImage = (uri: string, size: number, extraStyle?: object) => {
  const globalStyles: any = useGlobalStyles();

  return (
    <Image
      source={{uri: uri}}
      style={{
        ...globalStyles.squareLayout(size),
        ...extraStyle,
      }}
    />
  );
};

export const RenderIcon = (
  name: string,
  color: string,
  type: string,
  extraProps?: any,
) => {
  return <Icon name={name} type={type} color={color} {...extraProps} />;
};

export const renderAvatar = (url: string, size: number, extraProps: object) => {
  return (
    <Avatar
      activeOpacity={0.2}
      containerStyle={{backgroundColor: '#BDBDBD'}}
      rounded
      size={size}
      source={{uri: url}}
      title="AP"
      {...extraProps}
    />
  );
};
