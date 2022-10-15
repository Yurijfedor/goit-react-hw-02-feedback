import PropTypes from 'prop-types';

import { Box } from 'constans';
export const Section = ({ title, children }) => {
  return (
    <Box
      width="400px"
      p={3}
      ml="auto"
      mr="auto"
      mt={5}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      as={'section'}
    >
      <h2>{title}</h2>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
