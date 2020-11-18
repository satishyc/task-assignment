import React, { Component } from 'react';
import './App.css';
import Container1 from './Container1';
import Container2 from './Container2';
import Container3 from './Container3';
import Container4 from './Container4';

 
class App extends Component {
    render() {
        return (
            <div  style={{  display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}  className="App">
              <div >
                <Container1> </Container1>
              </div>
              <div >
                <Container2> </Container2>
              </div>
              <div >
                <Container3> </Container3>
              </div>
              <div >
                <Container4> </Container4>
              </div>
				    </div>
        );
    }
}
 
export default App;