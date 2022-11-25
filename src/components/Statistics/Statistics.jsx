import propTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { StatisticItem } from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, goodPersentage }) {
  return (
    <Box as="ul">
      <StatisticItem>Good: {good}</StatisticItem>
      <StatisticItem>Neutral: {neutral}</StatisticItem>
      <StatisticItem>Bad: {bad}</StatisticItem>
      <StatisticItem>Total: {total}</StatisticItem>
      <StatisticItem>Positive feedback: {goodPersentage}%</StatisticItem>
    </Box>
  );
}

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  goodPercentage: propTypes.number,
};
