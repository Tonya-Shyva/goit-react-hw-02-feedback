// import propTypes from 'prop-types';
import styled from 'styled-components';

export const FeedbackButton = styled.button`
  background-color: ${p => p.theme.colors.bcg};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.m};
  color: ${p => p.theme.colors.text};
  cursor: pointer;
  font-family: Inter, sans-serif;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  min-width: ${p => p.theme.space[7]}px;
  padding: ${p => p.theme.space[3]}px;
  text-align: center;
  transition: background-color 300ms linear;
  touch-action: manipulation;

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;
