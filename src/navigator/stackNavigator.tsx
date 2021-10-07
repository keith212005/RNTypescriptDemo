import * as React from 'react';

// THIRD PARTY IMPORTS
// @ts-ignore
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

// LOCAL IMPORTS
// @ts-ignore
import * as Screen from '@screens';
// @ts-ignore
import {colors} from '@resources';
import {navigationRef} from './RootNavigation';

const Stack = createStackNavigator();

// @ts-ignore
const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...colors,
  },
};

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
};

const StackNavigator = (props: any) => {
  const _addScreen = (screenName: string) => {
    return <Stack.Screen name={screenName} component={Screen[screenName]} />;
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={props.isDarkTheme ? MyDarkTheme : LightTheme}>
      <Stack.Navigator
        initialRouteName={'SplashScreen'}
        screenOptions={{
          headerShown: false,
          headerMode: 'screen',
          gestureEnabled: false,
          cardStyleInterpolator: forFade,
        }}>
        {_addScreen('SplashScreen')}
        {_addScreen('Login')}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
