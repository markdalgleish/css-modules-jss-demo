import ScopedSelectors from './ScopedSelectors';

import React, { Component } from 'react';

import js from '!!raw!./ScopedSelectors.js';
import styles from '!!raw!./ScopedSelectors.styling.js';
import Snippet from 'shared/Snippet/Snippet';

export default class ScopedSelectorsDemo extends Component {

  render() {
    const files = [
      { name: 'ScopedSelectors.js', source: js },
      { name: 'ScopedSelectors.styling.js', source: styles }
    ];

    return (
      <Snippet files={files}>
        <ScopedSelectors />
      </Snippet>
    );
  }

};
