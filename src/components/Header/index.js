import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Utility from '../Utility.js';
import HeadShot from '../../../public/HeadShot.jpg';
import Email_Address from '../../../public/email_address.png';

const Header = props => {
  return (
    <div className={styles.fixed}>
      <div className={styles.container}>
        <img className={styles['head-shot']} src={HeadShot} alt={'My face'} />
        <h1 className={styles.name}>{props.basics.name + ', CFA'}</h1>
        <h3 className={styles.title}>{props.basics.label}</h3>

        <Utility.Divider />

        <div className={styles.line}>
          <Utility.Icon type={['fa-globe', styles.gray]} />
          {props.basics.location.city + ', ' + props.basics.location.region + ', ' + props.basics.location.countryCode}
        </div>
        <div className={styles.line}>
          <Utility.Icon type={['fa-envelope', styles.gray]} />
          <img className={styles.email} src={Email_Address} />
        </div>

        <Utility.Divider />

        <a href='https://github.com/08martinm/'><Utility.Icon type={['fa-github', styles.large]} /></a>
        <a href='https://linkedin.com/in/08martinm/'><Utility.Icon type={['fa-linkedin-square', styles.large]} /></a>

        <Utility.Divider />

        <p>I built this site using React, CSS Modules, SASS, PostCSS, custom Webpack development and build configurations, and 
          the <a className={styles.link} href='https://jsonresume.org/schema/'>JSON Resume Schema</a>.
          To view the code-base, please visit my <a className={styles.link} href='https://github.com/08martinm/resume'>Github repo here</a>.
          <br />
          <br />
          I am currently searching for new career opportunities. If you are an employer interested in my work, please feel free to contact me via email.
        </p>

      </div>
    </div>
  );
};

Header.propTypes = {
  basics: PropTypes.object.isRequired,
};

export default Header;
