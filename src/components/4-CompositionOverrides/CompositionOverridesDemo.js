import CompositionOverrides from './CompositionOverrides';

import React, { Component } from 'react';

import js from '!!raw!./CompositionOverrides.js';
import styles from '!!raw!./CompositionOverrides.jss.js';
import layoutCss from '!!raw!shared/styles/layout.css';
import typographyCss from '!!raw!shared/styles/typography.css';
import Snippet from 'shared/Snippet/Snippet';

export default class CompositionOverridesDemo extends Component {

  render() {
    const files = [
      { name: 'CompositionOverrides.js', source: js },
      { name: 'CompositionOverrides.jss.js', source: styles },
      { name: 'shared/styles/layout.css', source: layoutCss },
      { name: 'shared/styles/typography.css', source: typographyCss }
    ];

    return (
      <Snippet files={files}>
        <CompositionOverrides />
      </Snippet>
    );
  }

};
