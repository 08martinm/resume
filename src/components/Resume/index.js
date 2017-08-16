import React from 'react';
import styles from './styles.css';
import PropTypes from 'prop-types';
import Utility from '../Utility';
import WorkItem from './Resume_Utils.js';

const Resume = props => {
  const sections = [
    ['About', 'user', 'work'], ['Work Experience', 'briefcase', 'work'], 
    ['Personal Projects', 'code', 'work'], ['Volunteer Work', 'heart', 'work'], 
    ['Skills', 'terminal', 'work'], ['Education', 'mortar-board', 'work'], ['Interests', 'thumbs-up', 'work'],
  ];

  return (
    <div className={styles.resume}>
      {sections.map(val => 
        <Section key={val[0]} title={val[0]} icon={'fa-' + val[1]} content={props[val[2]]} listItem={WorkItem}/>)}
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

const Section = props => (
  <div className={styles['section-header']}>
    <Utility.Icon type={[props.icon, styles.large]} />
    <span className={styles['section-title']}>{props.title.toUpperCase()}</span>
    <Utility.Divider />
    {props.content.map((val, i) => {
      const JSXTag = props.listItem;
      return <JSXTag {...val} key={i} />;
    })}
  </div>
);

Section.propTypes = {
  content: PropTypes.array.isRequired,
  title: PropTypes.string,
  icon: PropTypes.string.isRequired,
  listItem: PropTypes.func,
};

export default Resume;
