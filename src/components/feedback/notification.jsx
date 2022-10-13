import { Box } from 'constans';

export const Notification = ({ message }) => (
  <Box fontWeight="bold" as={'p'}>
    {message}
  </Box>
);
