import propTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { StatisticItem } from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, goodPercentage }) {
  return (
    <Box as="ul">
      <StatisticItem>Good: {good}</StatisticItem>
      <StatisticItem>Neutral: {neutral}</StatisticItem>
      <StatisticItem>Bad: {bad}</StatisticItem>
      <StatisticItem>Total: {total}</StatisticItem>
      <StatisticItem>Positive feedback: {goodPercentage} %</StatisticItem>
    </Box>
  );
}

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  goodPercentage: propTypes.number.isRequired,
};
