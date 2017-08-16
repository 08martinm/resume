import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import Utility from '../Utility.js';

const Header = props => {
  return (
    <div className={styles.container}>

      <img />
      <h1 className={styles.name}>{props.basics.name + ', CFA'}</h1>
      <h3 className={styles.title}>{props.basics.label}</h3>

      <Utility.Divider />

      <div className={styles.line}>
        <Utility.Icon type={['fa-globe', styles.gray]} />
        {props.basics.location.city + ', ' + props.basics.location.region + ', ' + props.basics.location.countryCode}
      </div>
      <div className={styles.line}>
        <Utility.Icon type={['fa-envelope', styles.gray]} />
        {props.basics.email}
      </div>

      <Utility.Divider />

      <Utility.Icon type={['fa-github', styles.large]} />
      <Utility.Icon type={['fa-linkedin-square', styles.large]} />

      <Utility.Divider />

      <p>{props.basics.summary}</p>

    </div>
  );
};

Header.propTypes = {
  basics: PropTypes.object.isRequired,
};

export default Header;
