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
    ONE: 'ONE',
    TWO: 'TWO',
    THREE: 'THREE',
  };

  const [activeStep, setActiveStep] = useState(STEPS.ONE);

  const styleStepFirst = styles(activeStep === STEPS.ONE).step;
  const styleStepSecond = styles(activeStep === STEPS.TWO).step;
  const styleStepThird = styles(activeStep === STEPS.THREE).step;
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
          name="StepOne"
          listeners={{focus: () => setActiveStep(STEPS.ONE)}}
          component={StepOne}
        />
        <Tab.Screen
          name="StepTwo"
          listeners={{focus: () => setActiveStep(STEPS.TWO)}}
          component={StepTwo}
        />
        <Tab.Screen
          name="StepThree"
          listeners={{focus: () => setActiveStep(STEPS.THREE)}}
          children={() => (
            <StepThree goToApp={() => navigation.navigate('App')} />
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default OnBoarding;
