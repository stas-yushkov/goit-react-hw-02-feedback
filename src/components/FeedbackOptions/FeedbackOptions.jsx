import { capitalize } from 'utils';
import { Button, ButtonsWrapper } from './StyledComponents';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsWrapper count={options.length}>
      {options.map(option => (
        <Button
          key={option}
          name={option}
          type="button"
          onClick={onLeaveFeedback}
        >
          {capitalize(option)}
        </Button>
      ))}
    </ButtonsWrapper>
  );
};
