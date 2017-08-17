import React, {Component} from 'react';
import styles from './styles.scss';
import PropTypes from 'prop-types';
import Utility from '../Utility';
import Tools from './Resume_Utils.js';

const Resume = props => {
  const sections = [
    ['About', 'user', 'basics'], ['Open-Source Projects', 'code', 'project'],
    ['Work Experience', 'briefcase', 'work'], ['Volunteer Work', 'heart', 'volunteer'], 
    ['Education', 'mortar-board', 'education'], ['Skills', 'terminal', 'skills'], ['Interests', 'thumbs-up', 'interests'],
  ];

  return (
    <div className={styles.resume}>
      {sections.map(subArr => <Section key={subArr[0]} info={subArr} content={props[subArr[2]]} />)}
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

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: true};
    this.setState = this.setState.bind(this);
  }

  toggleVisibility() {
    this.setState(prevState => {return {visible: !prevState.visible};});
  }

  render() {
    const JSXTag = Tools[this.props.info[2]];
    
    let displayText = null;
    if (this.state.visible) {
      displayText = this.props.info[2] == 'basics' ?
        <JSXTag summary={this.props.content.summary} /> :
        this.props.content.map((val, i) => <JSXTag {...val} key={i} />);
    }

    let toggleIcon = <Utility.Icon type={[this.state.visible ? 'fa-minus' : 'fa-plus']}/>;

    return (
      <div className={styles['section-header']}>
        <Utility.Icon type={['fa-' + this.props.info[1], styles.large]} />
        <span className={styles['section-title']}>{this.props.info[0].toUpperCase()}</span>
        <div className={styles['toggle-icon']} onClick={this.toggleVisibility.bind(this)}>
          {toggleIcon}
        </div>
        <Utility.Divider />
        {displayText}
      </div>
    );
  }
}

Section.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  info: PropTypes.array,
  listItem: PropTypes.func,
};

export default Resume;
