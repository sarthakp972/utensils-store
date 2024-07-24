"use client";
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from './Store';

const AppProvider = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  );
};

export default AppProvider;
