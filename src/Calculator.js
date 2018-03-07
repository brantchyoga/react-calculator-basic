import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props){
    super()
    this.state = {
      value1: 0,
      value2: 0,
      sum: ''
    }
  }
  handleChange = (index,e) => {
      if(index === 1){
        this.setState({value1: e.target.value})
      } else {
        this.setState({value2: e.target.value})
      }
  }
  adding = () => {
    this.setState({
      sum: parseInt(this.state.value1) + parseInt(this.state.value2)
    })
  }
  substracting = () => {
    this.setState({
      sum: parseInt(this.state.value1) - parseInt(this.state.value2)
    })
  }
  dividing = () => {
    this.setState({
      sum: parseInt(this.state.value1) / parseInt(this.state.value2)
    })
  }
  multiply = () => {
    this.setState({
      sum: parseInt(this.state.value1) * parseInt(this.state.value2)
    })
  }
  render(){

    return(
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="number" onChange={(e)=>this.handleChange(1,e)}/>
          <input type="number" onChange={(e)=>this.handleChange(2,e)}/>
          <button className="inline blue" onClick={this.adding}>+</button>
          <button className="inline blue" onClick={this.substracting}>-</button>
          <button className="inline blue" onClick={this.dividing}>/</button>
          <button className="inline blue" onClick={this.multiply}>*</button>
          <h3>{this.state.sum}</h3>
        </div>
      </div>
    )
  }
}

export default Calculator
