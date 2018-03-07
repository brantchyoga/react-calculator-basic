import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props){
    super()
    this.state = {
      value1: 0,
      value2: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(index,e){
      if(index === 1){
        this.setState({value1: e.target.value})
      } else {
        this.setState({value2: e.target.value})
      }
  }

  render(){
    let sum = parseInt(this.state.value1) + parseInt(this.state.value2)

    return(
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="number" onChange={(e)=>this.handleChange(1,e)}/>
          <span>+</span>
          <input type="number" onChange={(e)=>this.handleChange(2,e)}/>
          <span>=</span>
          <h3>{sum}</h3>
        </div>
      </div>
    )
  }
}

export default Calculator
