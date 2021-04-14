import React from 'react';
import styles from './container.module.css';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

Container.defaultProps = {
  children: [],
};

export default Container;
