import propTypes from 'prop-types';

import { SectionTitle } from '../Common/SectionTitle';
import { FeedbackButton } from './FeedbackSection.styled';

export function FeedbackSection({ states }) {
  /*console.log(states);*/
  return (
    <div>
      <SectionTitle>Please leave feedback</SectionTitle>
      {states.map((state, index) => (
        <FeedbackButton key={index}>{state}</FeedbackButton>
      ))}
    </div>
  );
}

FeedbackSection.propTypes = {
  states: propTypes.array.isRequired,
  index: propTypes.number,
};
