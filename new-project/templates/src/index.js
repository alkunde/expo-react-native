import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components/native';

import MainScreen from './screens/MainScreen';

import theme from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainScreen />
    </ThemeProvider>
  );
}