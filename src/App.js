'use strict';

import React from 'react';
import { render } from 'react-dom';
import Fortune from './Fortune';
import * as nostra from 'nostra';

// import $ from 'jquery';



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"fortune": nostra.generate()};
  }

  render() {
    return (
        <div>
          <Fortune fortune={this.state.fortune} />
        </div>
    );
  }
}



