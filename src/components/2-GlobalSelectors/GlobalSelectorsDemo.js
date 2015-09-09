import GlobalSelectors from './GlobalSelectors';

import React, { Component } from 'react';

import js from '!!raw!./GlobalSelectors.js';
import styles from '!!raw!./GlobalSelectors.jss.js';
import Snippet from 'shared/Snippet/Snippet';

export default class GlobalSelectorsDemo extends Component {

  render() {
    const files = [
      { name: 'GlobalSelectors.js', source: js },
      { name: 'GlobalSelectors.jss.js', source: styles }
    ];

    return (
      <Snippet files={files}>
        <GlobalSelectors />
      </Snippet>
    );
  }

};
