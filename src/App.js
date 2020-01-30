import React, { Component } from 'react';
import './App.css';
import toysdata from './data'
import ToyContainer from './component/toycontainer'
import Form from './component/Form'

class App extends Component {
  // console.log(toys)

  //Here State is an ARRAY of objects !!!!! !!!!!!!
  state = {
      toys: toysdata
  }

  deleteToy = (id) => {

      let deletedToyArray = this.state.toys.filter(toy => toy.id !== id)
       // If condition is met, filter out, if toy.id === id is met, we keep.
      
      this.setState({
        toys: deletedToyArray
      })
  }

  increaseLikes = (id) => {

      let updatedLikesArray = this.state.toys.map(toy => {

          if (toy.id === id) {
            return {...toy, likes: toy.likes +1 } 
          }
          else {
            return toy // toy will be returned into updatedLikesArray if id doesn't match. 
          }
      })

      this.setState({
          toys: updatedLikesArray // Now this is the copied array with updated likes
      })
  }

  submitNewToy = (messageFromChild) => {
    let newId = this.state.toys.length + 1
    let newToy = {...messageFromChild, id: newId, likes: 0}
    let newToysArray = [newToy, ...this.state.toys] //get toys array from state (this.state.toys) spread it and push the new toy object in
    this.setState({
      toys: newToysArray
    })
    
  }


  render(){
  
  return (
    <div className="App">
      <Form submitNewToy = {this.submitNewToy}/>
      <ToyContainer 
      deleteToy = {this.deleteToy}
      increaseLikes = {this.increaseLikes} 
      toys={this.state.toys}/>
    </div>
  );
}
}
export default App;



