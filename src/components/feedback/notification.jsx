import PropTypes from 'prop-types';

import { Box } from 'constans';

export const Notification = ({ message }) => (
  <Box fontWeight="bold" as={'p'}>
    {message}
  </Box>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
