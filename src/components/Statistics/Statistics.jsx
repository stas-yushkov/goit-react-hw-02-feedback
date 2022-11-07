import { Wrapper } from './StyledComponents';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Wrapper>
      <p>{`Good: ${good}`}</p>
      <p>{`Bad: ${bad}`}</p>
      <p>{`Neutral: ${neutral}`}</p>
      <p>{`Total: ${total}`}</p>
      <p>{`Positive feedback: ${positivePercentage}`}</p>
    </Wrapper>
  );
};
