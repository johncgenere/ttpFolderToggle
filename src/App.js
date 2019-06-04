import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        open: true
      }

      this.onToggleClick = this.onToggleClick.bind(this);
  }

  onToggleClick = (event) => {
    if(this.state.open)
      this.setState({open: false});
    else
      this.setState({open: true});
  }

  render(){
    if(this.state.open){
      return (
        <div className="App">
          <div className="App-header">
            <button className="ui white button" style={{marginBottom: '2%'}}><i className="folder open icon"></i> Home </button>
              <p><i className="caret right icon"></i><i className="file icon"></i> File1</p>
              <p><i className="caret right icon"></i><i className="file icon"></i> File2</p>
              <p><i className="caret right icon"></i><i className="file icon"></i> File3</p>
            <button className="ui red button" onClick={this.onToggleClick}> Toggle </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="App-header">
            <button className="ui white button" style={{marginBottom: '2%'}}><i className="folder icon"></i> Home </button>
            <button className="ui red button" onClick={this.onToggleClick}> Toggle </button>
          </div>
        </div>
      );
    }
  }
}

export default App;
