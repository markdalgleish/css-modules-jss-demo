import styles from './ScopedSelectors.jss';

import React, { Component } from 'react';

export default class ScopedSelectors extends Component {

  render() {
    return (
      <div className={ styles.root }>
        <p className={ styles.text }>Scoped Selectors</p>
      </div>
    );
  }

};
