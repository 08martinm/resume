import React from 'react';
import styles from './styles.scss';
import PropTypes from 'prop-types';
import Utility from '../Utility';
import Tools from './Resume_Utils.js';

const Resume = props => {
  const sections = [
    ['About', 'user', 'basics'], ['Work Experience', 'briefcase', 'work'], 
    ['Open-Source Projects', 'code', 'project'], ['Volunteer Work', 'heart', 'volunteer'], 
    ['Education', 'mortar-board', 'education'], ['Skills', 'terminal', 'skills'], ['Interests', 'thumbs-up', 'interests'],
  ];

  return (
    <div className={styles.resume}>
      {sections.map(val => <Section key={val[0]} info={val} content={props[val[2]]} />)}
    </div>
  );
};

Resume.propTypes = {
  basics: PropTypes.object.isRequired,
  work: PropTypes.array.isRequired,
  volunteer: PropTypes.array.isRequired,
  education: PropTypes.array.isRequired,
  publications: PropTypes.array.isRequired,
  skills: PropTypes.array.isRequired,
};

const Section = props => {
  const JSXTag = Tools[props.info[2]];
  return (
    <div className={styles['section-header']}>
      <Utility.Icon type={['fa-' + props.info[1], styles.large]} />
      <span className={styles['section-title']}>{props.info[0].toUpperCase()}</span>
      <Utility.Divider />
      {props.info[2] == 'basics' ?
        <JSXTag summary={props.content.summary} /> :
        props.content.map((val, i) => <JSXTag {...val} key={i} />)
      }
    </div>
  );
};

Section.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  info: PropTypes.array,
  listItem: PropTypes.func,
};

export default Resume;
