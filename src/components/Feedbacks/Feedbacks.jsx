import propTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { FeedbackButton } from './Feedbacks.styled';

export function Feedbacks({ states, onLeaveFeedback }) {
  /*console.log(states);*/
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-between">
      {states.map(state => (
        <FeedbackButton
          key={state}
          type="button"
          onClick={e => {
            // console.log('click', e);
            onLeaveFeedback(state);
          }}
        >
          {state}
        </FeedbackButton>
      ))}
    </Box>
  );
}

Feedbacks.propTypes = {
  states: propTypes.arrayOf(propTypes.string).isRequired,
};
