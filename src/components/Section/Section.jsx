import { SectionWrapper } from './StyledComponents';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      {title && <h2>{title}</h2>}
      {children}
    </SectionWrapper>
  );
};
