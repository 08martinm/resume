import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Work = props => (
  <div className={styles.item}>
    <h3 className={styles['item-title']}>{props.company + ', ' + props.position }</h3>
    <h5 className={styles['item-title']}>{props.startDate + ' - ' + props.endDate}</h5>
    <span>{props.summary}</span>
  </div>
);

Work.propTypes = {
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

const About = props => (
  <div className={styles.item}>
    <span>{props.summary}</span>
  </div>
);

About.propTypes = {summary: PropTypes.string.isRequired};

const Project = props => (
  <div className={styles.item}>
    <h3 className={styles['item-title']}>{props.group + ', ' + props.position }</h3>
    <h5 className={styles['item-title']}>{props.startDate + ' - ' + props.endDate}</h5>
    <span>{props.summary}</span>
  </div>
);

Project.propTypes = {
  group: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

const Volunteer = props => (
  <div className={styles.item}>
    <h3 className={styles['item-title']}>{props.organization + ', ' + props.position }</h3>
    <h5 className={styles['item-title']}>{props.startDate + ' - ' + props.endDate}</h5>
    <span>{props.summary}</span>
  </div>
);

Volunteer.propTypes = {
  organization: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

const Education = props => (
  <div className={styles.item}>
    <h3 className={styles['item-title']}>{props.institution + ', ' + props.area}</h3>
    <h5 className={styles['item-title']}>{props.startDate + ' - ' + props.endDate}</h5>
  </div>
);

Education.propTypes = {
  institution: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

const Skills = props => <div className={styles.skill}>{props.name}</div>;
Skills.propTypes = {name: PropTypes.string.isRequired};

const Interests = props => <div className={styles.interest}>{props.name}</div>;
Interests.propTypes = {name: PropTypes.string.isRequired};

const Tools = {};
Tools.basics = About;
Tools.work = Work;
Tools.project = Project;
Tools.volunteer = Volunteer;
Tools.education = Education;
Tools.skills = Skills;
Tools.interests = Interests;
export default Tools;