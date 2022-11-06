import styled from 'styled-components';

import { colors } from 'constants/colors';
import { BUTTON_BORDER_RADIUS, BUTTON_WIDTH, BUTTON_PADDING } from 'constants';

export const FeedbackSection = styled.section`
  //
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: ${props =>
    props.count ? `${props.count * BUTTON_WIDTH + BUTTON_WIDTH}px` : '400px'};
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
  width: ${BUTTON_WIDTH}px;
  padding: ${BUTTON_PADDING};
  background-color: ${colors.white};
  outline: none;
  border: 1px solid ${colors.buttonBorder};
  border-radius: ${BUTTON_BORDER_RADIUS}px;
`;
