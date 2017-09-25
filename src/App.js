import React from 'react';
import styles from './App.scss';
import Header from './components/Header/';
import Resume from './components/Resume/';

const App = props => {
  return (
    <div className={styles['base-css']}>
      <Header {...props} />
      <Resume {...props} />
    </div>
  );
};

export default App;
