import { StyledNotification } from './StyledComponents';

export const Notification = ({ message }) => {
  return (
    <StyledNotification>
      <p>{message}</p>
    </StyledNotification>
  );
};
