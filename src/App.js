import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <button className="ui white button"><i className="folder icon"></i> Home </button>
          <ul>
            <li> <i className="file icon"></i> File 1 </li>
            <li> <i className="file icon"></i> File 2 </li>
            <li> <i className="file icon"></i> File 3 </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
