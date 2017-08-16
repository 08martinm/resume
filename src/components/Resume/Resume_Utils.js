import React from 'react';
import PropTypes from 'prop-types';

const WorkItem = props => {
  return (
    <div>
      <h3>{props.position + ', ' + props.company}</h3>
      <h6>{props.startDate + ' - ' + props.endDate}</h6>
      <span>HELLO!</span>
    </div>
  );
};

WorkItem.propTypes = {
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default WorkItem;