import { Box } from 'constans';
import { Button } from './feedbackOptions.styled';
export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Box display="flex" gridGap={3}>
      <Button type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </Button>
      <Button type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </Button>
      <Button type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </Button>
    </Box>
  );
};
