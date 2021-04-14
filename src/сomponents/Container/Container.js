import React from 'react';
import PropTypes from 'prop-types';


const Container = ({ children }) => {
  return <div>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

Container.defaultProps = {
  children: [],
};

export default Container;