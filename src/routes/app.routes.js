import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './tabs.routes';
import {CreatePost} from '../screens';
import {SafeAreaView} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#FFB40B', elevation: 0},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerTitle: 'Vai Passar',
          }}
          initialRouteName="Home">
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="CreatePost" component={CreatePost} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
