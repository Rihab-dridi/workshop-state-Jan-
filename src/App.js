import React from "react";
import { Button, Spinner } from "react-bootstrap";
import "./App.css";
import Counter from "./components/Counter";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      counter: 0,
    };
  }
  showHandler = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  //step1: declare the dynamic variable (state)
  //step2: precise the way we want the  variable to be changed
  //step3: link the function to an event 
  //**********************************
  // fct = () => {
  //   console.log("test");
  //   return console.log("hello world");
  // };
  // <button onClick={this.fct}  >click me </button>
  //******************************* */

  render() {
    return (
      <div className="App">
        <Button onClick={this.showHandler} > { this.state.show? "Hide" : "Show" } </Button>
      {
        this.state.show?   <Counter /> : <Spinner animation="grow" />
      }
      </div>
    );
  }
}
export default App;
