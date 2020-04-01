import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FirstStep, SecondStep} from '../../screens';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {styles} from './onboarding.styles';

const Tab = createMaterialTopTabNavigator();

const OnBoarding = ({navigation}) => {
  const STEPS = {
    FIRST: 'FIRST',
    SECOND: 'SECOND',
  };

  const [activeStep, setActiveStep] = useState(STEPS.FIRST);

  const styleStepFirst = styles(activeStep === STEPS.FIRST).step;
  const styleStepSecond = styles(activeStep === STEPS.SECOND).step;
  const styleStepContainer = styles().container;

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarPosition="bottom"
        tabBar={() => (
          <View style={styleStepContainer} pointerEvents="none">
            <View style={styleStepFirst} />
            <View style={styleStepSecond} />
          </View>
        )}>
        <Tab.Screen
          name="FirstStep"
          listeners={{focus: () => setActiveStep(STEPS.FIRST)}}
          component={FirstStep}
        />
        <Tab.Screen
          name="SecondStep"
          listeners={{focus: () => setActiveStep(STEPS.SECOND)}}
          children={() => (
            <SecondStep goToApp={() => navigation.navigate('App')} />
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default OnBoarding;
