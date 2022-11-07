import { Component } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

import { FeedbackSection } from './StyledComponents';

import { sum } from 'utils';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleFeedbackClick = e => {
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => sum(Object.values(this.state));

  countPositiveFeedbackPercentage = () => {
    if (sum(Object.values(this.state)))
      return `${Math.round(
        (this.state.good / sum(Object.values(this.state))) * 100
      )}%`;
    return '0%';
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackSection>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleFeedbackClick}
            />
          </Section>
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        </FeedbackSection>
      </div>
    );
  }
}
