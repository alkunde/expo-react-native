import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.button_color};
`;

export const Text = styled.Text`
  
`;