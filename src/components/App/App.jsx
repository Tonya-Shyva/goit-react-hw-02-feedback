import React, { Component } from 'react';

import { Section } from 'components/Section/Section';
import { Box } from 'components/Box/Box';
import { Statistics } from 'components/Statistics/Statistics';
import { Feedbacks } from '../Feedbacks/Feedbacks';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickHandler = e => {
    if (e === 'Good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    } else if (e === 'Neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    } else if (e === 'Bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercentage = 0;
    if (this.countTotalFeedback() !== 0) {
      positiveFeedbackPercentage = Math.round(
        (this.state.good / this.countTotalFeedback()) * 100
      );
    }
    return positiveFeedbackPercentage;
  };

  render() {
    return (
      <Box
        maxWidth="480px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        ml="auto"
        mr="auto"
      >
        <Section title="Please leave feedback">
          <Feedbacks
            states={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.clickHandler}
          ></Feedbacks>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              goodPercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Box>
    );
  }
}
