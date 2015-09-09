import ScopedAnimations from './ScopedAnimations';

import React, { Component } from 'react';

import js from '!!raw!./ScopedAnimations.js';
import styles from '!!raw!./ScopedAnimations.jss.js';
import animationsCss from '!!raw!shared/styles/animations.css';
import Snippet from 'shared/Snippet/Snippet';

export default class ScopedAnimationsDemo extends Component {

  render() {
    const files = [
      { name: 'ScopedAnimations.js', source: js },
      { name: 'ScopedAnimations.jss.js', source: styles },
      { name: 'shared/styles/animations.css', source: animationsCss }
    ];

    return (
      <Snippet files={files}>
        <ScopedAnimations />
      </Snippet>
    );
  }

};
