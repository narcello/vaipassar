import React from 'react';
import {Feed, MyPosts, Favorits} from '../screens';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        indicatorStyle: {backgroundColor: 'white'},
        style: {backgroundColor: '#FFB40B'},
      }}>
      <Tab.Screen
        name="Posts"
        component={Feed}
        options={{
          title: 'Feed',
        }}
      />
      <Tab.Screen
        name="MyPosts"
        component={MyPosts}
        options={{
          title: 'Meus posts',
        }}
      />
      <Tab.Screen
        name="Favorits"
        component={Favorits}
        options={{
          title: 'Favoritos',
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
