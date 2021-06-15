import React from 'react'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {number: Math.random() * 1000};

    // This binding is necessary to make `this` work in the callback
    this.generate = this.generate.bind(this);
  }
  generate() {
      this.setState(prevState => ({
      number: Math.floor(Math.random() * 1000)
    }));
  }

  render(){
    return (
      <div className="App">
        <header>
          Random number generator
        </header>
        <div>
          <p style={{fontSize: "bigger"}}>{this.state.number}</p>
          <button onClick={this.generate}>
            Generate
          </button>
        </div>
      </div>      
    );
  }
}

export default App;
