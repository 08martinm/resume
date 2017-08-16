import React from 'react';
import styles from './Header/styles.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Divider = () => <div className={styles.divider}></div>;
const Icon = props => <i className={classnames(styles.icon, 'fa', ...props.type)} aria-hidden='true'></i>;

Icon.propTypes = {
  type: PropTypes.array,
};

exports.Divider = Divider;
exports.Icon = Icon;
