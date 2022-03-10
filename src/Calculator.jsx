import { Component } from "react"

export default class Calculator extends Component {
  state = {
    num1: '',
    num2: '',
    sum: ''
  }

    
    calculate = (e) => {
      e.preventDefault()
      this.setState({
          sum: this.state.num1 + this.state.num2
        })
      }
  
    setNum = (e) => {
      this.setState({
        [e.target.name]: parseInt(e.target.value)
      })
    }
    
    render() {
  return (
    <div className="container">
    <h1>Add with React!</h1>
    <form onSubmit={this.calculate}></form>
    <div className="add">
      <input 
      type="number"
      name="num1"
      placeholder="Enter your first number"
      value={this.state.num1}
      onChange= {this.setNum}       
      />
      <span>+</span>
      <input 
      type="number"
      name="num2"
      placeholder="Enter your second number"
      value={this.state.num2}
      onChange= {this.setNum}
      />
      <button>=</button>
      <h3>{this.state.sum} Addition results go here!</h3>
    </div>
  </div>
  ) 
}
}

