import React from 'react';
import {Timeline, CreatePost, AuthorArea} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Posts" component={Timeline} />
      <Tab.Screen name="New" component={CreatePost} />
      <Tab.Screen name="My posts" component={AuthorArea} />
      <Tab.Screen name="Favorts" component={AuthorArea} />
    </Tab.Navigator>
  );
};

export default Tabs;
