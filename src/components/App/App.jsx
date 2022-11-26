import { useState } from 'react';

import { Section } from 'components/Section/Section';
import { Box } from 'components/Box/Box';
import { Statistics } from 'components/Statistics/Statistics';
import { Feedbacks } from '../Feedbacks/Feedbacks';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickHandler = e => {
    if (e === 'Good') {
      setGood(good + 1);
    } else if (e === 'Neutral') {
      setNeutral(neutral + 1);
    } else if (e === 'Bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((good / countTotalFeedback()) * 100);
  };

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
          onLeaveFeedback={clickHandler}
        ></Feedbacks>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            goodPersentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Box>
  );
};
