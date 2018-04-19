import React, {Component} from "react";

import convert from "./convert";

class Converter extends Component {
  state = {value: 'Type here'};

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleConvert = (value) => {
    let result; 
    try {
      result = convert(value);
    } catch (e) {
      result = "not acceptable (must be between 0 and 4999)";
    }
    return result;
  }

  render() {
    return (
      <div>
        <h1>Roman numerals converter</h1>
        <p>Roman numeral: <input type="text" value={this.state.value} onChange={this.handleChange} /></p>
        <p>is {this.handleConvert(this.state.value)}</p>
      </div>
    );
  }
}

export default Converter;