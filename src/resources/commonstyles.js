import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

// @ts-ignore
import {fontSize, fonts} from '@resources';

const getGlobalStyles = props =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.colors.backgroundColor,
    },
    textStyle: (
      size = '_14',
      color = 'textPrimaryColor',
      type = 'PROXIMANOVA_REGULAR',
    ) => {
      return {
        color: props.colors[color],
        fontSize: fontSize[size],
        fontFamily: fonts[type],
      };
    },
    layoutDirection: (flex, justifyContent, alignItems) => {
      return {
        flexDirection: flex,
        alignItems: alignItems,
        justifyContent: justifyContent,
      };
    },
    squareLayout: size => {
      return {
        width: size,
        aspectRatio: 1,
      };
    },
  });

export const useGlobalStyles = () => {
  const {colors} = useTheme();

  // We only want to recompute the stylesheet on changes in color.
  const styles = React.useMemo(() => getGlobalStyles({colors}), [colors]);

  return styles;
};
