import React, { Component } from 'react';
import Toycard from './toycard'
class toycontainer extends Component {

   
    render() {
        
    let toyMapper =  this.props.toys.map((toyObj) => <Toycard
    increaseLikes = {this.props.increaseLikes} 
    deleteToy = {this.props.deleteToy}
    key={toyObj.id}
    toy={toyObj} //toy={toyObj} => each toy object for each Toycard
    />) //map through the toy array(data) render a Toycard for each toy along with their props
    
        
        // console.log(this.props.toys)
        return (
            <div>
            {toyMapper} 
            </div>
        ); //each Toycard gets return here
    }
}

export default toycontainer;