
//ページ遷移処理
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import start from './start';
import question from './question';
import answer from './answer';

// スタックナビゲーションの作成
const AppNavigation = createStackNavigator(
  {
    Select1: {
      screen: start,
      navigationOptions: {
        gestureEnabled: false,
        headerShown:false
      },
    },
    Select2: {
      screen: question,
      navigationOptions: {
        gestureEnabled: false,
      },
    },
    Select3: {
      screen: answer,
      navigationOptions: {
        gestureEnabled: false,
      },
    },
  },
  {
    mode: 'card',
    initialRouteName: 'Select1',
  }
);
export default createAppContainer(AppNavigation);