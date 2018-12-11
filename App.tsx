import React, { Component, RefObject } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import MainNavigator from './src/config/navigation';
import store from './src/Redux';
import NavigationService from './src/config/navigation/NavigationService';
import { Config } from 'react-native-config';
import * as SB from './storybook';

class App extends Component {
  // navigatorRef: RefObject<NavigationContainerComponent> = React.createRef();
  render() {
    return (
      <Provider store={store}>
        {/* SafeAreaView background must be colored to see status bar */}
        <SafeAreaView
          style={[styles.container, { backgroundColor: '#590889' }]}
        >
          <StatusBar barStyle="light-content" />
          <MainNavigator
            ref={(navigatorRef: any) => {
              NavigationService.setNav(navigatorRef);
            }}
          />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

//i have no idea if this is legit, but we're doing it anyway
const AppRoot = (Config.IS_STORYBOOK == "true") ? SB : App;

export default AppRoot;