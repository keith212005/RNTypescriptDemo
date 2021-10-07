import {
  createNavigationContainerRef,
  CommonActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params: object) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  } else {
    console.log('Navigation Ref not ready');
  }
}

export function resetNavigation(name: string, params: object) {
  console.log(navigationRef.isReady());

  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: name, params}],
    }),
  );
}
