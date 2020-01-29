import React, { Component } from 'react';
import Toycard from './toycard'
class toycontainer extends Component {

   
    render() {
        
    let toyMapper =  this.props.toys.map((toyObj) => <Toycard
    increaseLikes = {this.props.increaseLikes} 
    deleteToy = {this.props.deleteToy}
    key={toyObj.id} toy={toyObj}
    
    />)
        
        // console.log(this.props.toys)
        return (
            <div>
            {toyMapper}
            </div>
        );
    }
}

export default toycontainer;