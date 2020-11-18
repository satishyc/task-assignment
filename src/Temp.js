import React, { Component } from 'react';
 
class Temp extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      data: null,
    };
  }
 
  componentDidMount() {
    fetch('http://localhost:9000/C103')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
 
  
}
 
export default Temp;