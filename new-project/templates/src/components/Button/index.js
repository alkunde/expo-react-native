import React from 'react';

import { Container, Text } from './styles';

// This is a simple example of a component
const Button = ({
  onPress,
  title,
}) => {
  return (
    <Container onPress={onPress}>
      <Text>{title}</Text>
    </Container>
  );
}

export default Button;