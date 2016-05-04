'use strict';

import React from 'react';
import { render } from 'react-dom';
// import $ from 'jquery';

const App = React.createClass({


  loadFromApi: function() {
    // const url = "http://disneypubworlddev.cp.disney.com/demo2/public/api.asp?countries=1";
    // $.ajax({
    //   url: url,
    //   dataType: 'json',
    //   cache: false,
    //   success: function(data) {
    //     this.setState({countries: data});
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.error(url, status, err.toString());
    //   }.bind(this)
    // });
  },


  getInitialState: function () {
    // return {"countries": [{"Country":"USA", "ListCode":"1"}, {"Country":"Sweden", "ListCode": "2"}]}
    return {"countries": []}
  },

  componentDidMount: function() {
    // this.loadFromApi();
  },

  render: function() {

    return (
        <div>
          Hello, world!
        </div>
    );
  }
});


export default App;



