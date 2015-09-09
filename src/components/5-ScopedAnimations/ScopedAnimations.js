import styles from './ScopedAnimations.jss';

import React, { Component } from 'react';

export default class ScopedAnimations extends Component {

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.ball} />
      </div>
    );
  }

};
