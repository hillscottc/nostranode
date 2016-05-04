import React from 'react';
import { render } from 'react-dom';

export default class Fortune extends React.Component {

  constructor(props) {
    super(props);
  }

  getFortune() {
    this.setState({fortune: "blah"});
    console.log("Getting fortune.");
  }

  render() {
    return (
        <div>
          <input type="submit" class="btn btn-primary" value="Get Fortune" onClick={() => this.getFortune()} />
          {this.props.fortune}
        </div>
    );
  }
}


Fortune.propTypes = {
  fortune: React.PropTypes.string
};

Fortune.defaultProps = {
  fortune: "What does the future hold?."
};