import React from "react";
import {Button} from 'react-bootstrap'
class Counter extends React.Component {

    componentWillUnmount(){
      //  console.log('the component is fading ...........')
      console.log('are you sure you want to close the tab?? ')
    }

    componentDidMount(){
        console.log( 'welcome to the website ')
    }
  render() {



    return (
      <div className="counter" >
        <Button variant="primary">+</Button>
        <h2>0</h2>
        <Button variant="danger">- </Button>
      </div>
    );
  }
}
export default Counter;
