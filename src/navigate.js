import {NavigationContainerRef} from '@react-navigation/core';
import {CommonActions} from '@react-navigation/native';
import {StackActions} from '@react-navigation/routers';
import React from 'react';
import {Keyboard} from 'react-native';

export const navigationRef = React.createRef();

const push = async (name, passProps) => {
  Keyboard.dismiss();
  navigationRef.current?.dispatch(StackActions.push(name, passProps));
};

const pop = async () => {
  Keyboard.dismiss();
  navigationRef.current?.goBack();
};

const popToRoot = async () => {
  Keyboard.dismiss();

  setTimeout(() => {
    navigationRef.current?.dispatch(StackActions.popToTop());
  }, 100);
};
const reset = async (name, params) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: name, params: params}],
    }),
  );
};
const replace = async (name, passProps) => {
  console.log('dddw');
  Keyboard.dismiss();
  setTimeout(() => {
    navigationRef.current?.dispatch(StackActions.replace(name, passProps));
  }, 100);
};

export {push, pop, popToRoot, replace, reset};
