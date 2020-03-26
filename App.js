import React from 'react';
import {registerUser} from './src/db/soa';
import {
  OnBoarding,
  Splash,
  Timeline,
  CreatePost,
  AuthorArea,
} from './src/screens';
import {createStackNavigator} from '@react-navigation/stack';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';

registerUser();
const {Navigator, Screen} = createStackNavigator();

const RootNavigator = createSwitchNavigator(
  {
    App: () => <App />,
    OnBoarding: OnBoarding,
    Splash: Splash,
  },
  {
    initialRouteName: 'Splash',
  },
);

const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Timeline">
        <Screen
          name="Timeline"
          options={{headerTitle: 'Posts'}}
          component={Timeline}
        />
        <Screen
          name="CreatePost"
          options={{headerTitle: 'Criar um post'}}
          component={CreatePost}
        />
        <Screen
          name="AuthorArea"
          options={{headerTitle: 'Meu espaço'}}
          component={AuthorArea}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default createAppContainer(RootNavigator);
