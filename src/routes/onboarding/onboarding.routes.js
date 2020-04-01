import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StepOne, StepTwo} from '../../screens';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {styles} from './onboarding.styles';
import StepThree from '../../screens/onboarding/StepThree';

const Tab = createMaterialTopTabNavigator();

const OnBoarding = ({navigation}) => {
  const STEPS = {
    FIRST: 'FIRST',
    SECOND: 'SECOND',
    THIRD: 'THIRD',
  };

  const [activeStep, setActiveStep] = useState(STEPS.FIRST);

  const styleStepFirst = styles(activeStep === STEPS.FIRST).step;
  const styleStepSecond = styles(activeStep === STEPS.SECOND).step;
  const styleStepThird = styles(activeStep === STEPS.THIRD).step;
  const styleStepContainer = styles().container;

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarPosition="bottom"
        tabBar={() => (
          <View style={styleStepContainer} pointerEvents="none">
            <View style={styleStepFirst} />
            <View style={styleStepSecond} />
            <View style={styleStepThird} />
          </View>
        )}>
        <Tab.Screen
          name="FirstStep"
          listeners={{focus: () => setActiveStep(STEPS.FIRST)}}
          component={StepOne}
        />
        <Tab.Screen
          name="StepTwo"
          listeners={{focus: () => setActiveStep(STEPS.SECOND)}}
          component={StepTwo}
        />
        <Tab.Screen
          name="StepThree"
          listeners={{focus: () => setActiveStep(STEPS.THIRD)}}
          children={() => (
            <StepThree goToApp={() => navigation.navigate('App')} />
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default OnBoarding;
