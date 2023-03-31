import React from 'react';

import Button from '../../components/Button';

import { Container, Text } from './styles';

const MainScreen = () => {
  const buttonPress = () => {
    console.log('Apertou botão');
  }

  return (
    <Container>
      <Text>Hello React Native! This is the Main screen</Text>

      <Button onPress={buttonPress} title='Botão' />
    </Container>
  );
}

export default MainScreen;