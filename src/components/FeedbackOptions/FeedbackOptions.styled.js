import styled from 'styled-components';

export const ListItem = styled.li`
  list-style: none;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  padding: 8px;
  &:first-letter {
    text-transform: capitalize;
  }
`;

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;
