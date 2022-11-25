import { Box } from '../Common/Box';
import { FeedbackSection } from '../FeedbackSection/FeedbackSection';

export const App = () => {
  return (
    <Box
      // as="div"
      display="flex"
      m={20}
      // style={{
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   color: '#010101',
      // }}
    >
      <FeedbackSection states={['Good', 'Neutral', 'Bad']}></FeedbackSection>
    </Box>
  );
};
