import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FirstStep, SecondStep} from '../screens';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const OnBoarding = ({navigation}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={() => <></>}>
        <Tab.Screen name="FirstStep" component={FirstStep} />
        <Tab.Screen
          name="SecondStep"
          children={() => (
            <SecondStep goToApp={() => navigation.navigate('App')} />
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default OnBoarding;
