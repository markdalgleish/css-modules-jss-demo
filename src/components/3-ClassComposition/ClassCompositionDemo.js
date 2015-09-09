import ClassComposition from './ClassComposition';

import React, { Component } from 'react';

import js from '!!raw!./StyleVariantA/StyleVariantA.js';
import styles from '!!raw!./StyleVariantA/StyleVariantA.jss.js';
import layoutCss from '!!raw!shared/styles/layout.css';
import typographyCss from '!!raw!shared/styles/typography.css';
import Snippet from 'shared/Snippet/Snippet';

export default class ClassCompositionDemo extends Component {

  render() {
    const files = [
      { name: 'StyleVariantA.js', source: js },
      { name: 'StyleVariantA.jss.js', source: styles },
      { name: 'shared/styles/layout.css', source: layoutCss },
      { name: 'shared/styles/typography.css', source: typographyCss }
    ];

    return (
      <Snippet files={files}>
        <ClassComposition />
      </Snippet>
    );
  }

};
