import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SECTION_1 from './SECTION_1.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <SECTION_1/>   
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));