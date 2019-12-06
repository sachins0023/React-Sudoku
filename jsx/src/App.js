import React, { Component } from "react";
import "./App.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      counter: 3,
      disabled: false
    };
    this.validate = this.validate.bind(this);
  }

  validate(number) {
    let num = parseInt(number.target.value);
    this.setState({
        value: num
    })
    if (num !== this.props.answer) {
      this.setState({
        value: num,
        counter: --this.state.counter
      });
      if (this.state.counter) {
        alert("Wrong answer! " + String(this.state.counter) + " chances left!");
        this.props.countFn();
      } else {
        alert("No more chances left. Input for this cell blocked!");
        this.props.countFn();
        this.state.disabled = true;
      }
    } else {
      this.setState({
        value: num
      });
    }
  }

  render() {
    return (
      <div className="box">
        
        {this.props.number ? (
          <div className="given-number"> {this.props.number} </div>
        ) : this.state.value === "" ? (
          this.state.counter ? (
            <input
              className="input-number"
              value={this.state.value}
              onChange={this.validate}
              type="number"
            >
              
            </input>
          ) : (
            <input
              className="input-number"
              value={this.state.value}
              type="number"
              style={{ backgroundColor: "pink" }}
              disabled={this.state.disabled ? "disabled" : ""}
            >
              
            </input>
          )
        ) : (
          <input
            className="input-number"
            value={this.state.value}
            type="number"
            style={{ color: "green" }}
          >
            
          </input>
        )}
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      total_counter: 0
    };
    this.getStateValue = this.getStateValue.bind(this);
  }

  displayCounter() {
    this.setState({
      total_counter: ++this.state.total_counter
    });
  }

  getStateValue() {
    return this.state.total_counter;
  }

  render() {
    return (
      <div className="app">
        <div className="header">SUDOKU </div>
        <div className="line">
          <Box number={3} countFn={() => this.displayCounter()}>
            
          </Box>
          <Box answer={1} countFn={() => this.displayCounter()}>
            
          </Box>
          <Box answer={4} countFn={() => this.displayCounter()}>
            
          </Box>
          <Box number={2} countFn={() => this.displayCounter()}>
            
          </Box>
        </div>
        <div className="line">
          <Box answer={2} countFn={() => this.displayCounter()}>
            
          </Box>
          <Box number={4} countFn={() => this.displayCounter()}>
            
          </Box>
          <Box number={1} countFn={() => this.displayCounter()}>
            
          </Box>
          <Box answer={3} countFn={() => this.displayCounter()}>
            
          </Box>
        </div>
        <div className="line">
          <Box answer={2} countFn={() => this.displayCounter()}>
            
          </Box>
          <Box number={3} countFn={() => this.displayCounter()}>
            
          </Box>
          <Box number={2} countFn={() => this.displayCounter()}>
            
          </Box>
          <Box answer={4} countFn={() => this.displayCounter()}>
            
          </Box>
        </div>
        <div className="line">
          <Box number={4} countFn={() => this.displayCounter()}>
            
          </Box>
          <Box answer={2} countFn={() => this.displayCounter()}>
            
          </Box>
          <Box answer={3} countFn={() => this.displayCounter()}>
            
          </Box>
          <Box number={1} countFn={() => this.displayCounter()}>
            
          </Box>
        </div>
        <div className="total-count">
          <div className="total-count-text"> Total Wrong Attemps: </div>
          <input
            id="total-count-input"
            className="line"
            onChange={this.getStateValue}
            value={this.state.total_counter}
            type="number"
          >
            
          </input>
        </div>
      </div>
    );
  }
}

export default App;
