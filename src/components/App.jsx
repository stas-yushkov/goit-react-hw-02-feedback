import { Component } from 'react';

import { capitalize } from 'utils';
import { ButtonsWrapper, FeedbackSection, Button } from './StyledComponents';

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
          <h1>Please leave feedback</h1>
          <ButtonsWrapper count={Object.keys(this.state).length}>
            {Object.keys(this.state).map(key => (
              <Button
                key={key}
                name={key}
                type="button"
                onClick={this.handleFeedbackClick}
              >
                {capitalize(key)}
              </Button>
            ))}
          </ButtonsWrapper>

          <p>Statistics</p>
          {Object.entries(this.state).map(entry => (
            <p key={entry[0]}>{`${capitalize(entry[0])}: ${entry[1]}`}</p>
          ))}
        </FeedbackSection>
      </div>
    );
  }
}
