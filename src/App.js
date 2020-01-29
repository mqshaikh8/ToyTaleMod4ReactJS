import React, { Component } from 'react';
import './App.css';
import toysdata from './data'
import ToyContainer from './component/toycontainer'

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
            console.log('id is found', id)
            return {...toy, likes: toy.likes +1 } 
          }
          else {
            console.log('not here')
            return toy // toy will be returned into updatedLikesArray if id doesn't match. 
          }
      })

      this.setState({
          toys: updatedLikesArray // Now this is the copied array with updated likes
      })
  }


  render(){
  
  return (
    <div className="App">
      <ToyContainer 
      deleteToy = {this.deleteToy}
      increaseLikes = {this.increaseLikes} toys={this.state.toys}/>
    </div>
  );
}
}
export default App;



