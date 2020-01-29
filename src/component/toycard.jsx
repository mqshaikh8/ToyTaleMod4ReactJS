import React, { Component } from 'react';

class toycard extends Component {
   

    handleLike = (evt) => {

        this.props.increaseLikes(this.props.toy.id)
    }


    handleDelete = (evt) => {
        this.props.deleteToy(this.props.toy.id)
    }


    render() {
        
    let {name, image, likes} = this.props.toy
    
        return (
            <div>
                <ul>
                   <li>I am {name}</li>
                    <li>{likes} Likes</li>
                   <button onClick = {this.handleLike} >Like Me</button>
                   <button onClick = {this.handleDelete}> Bye Bye</button>
                    <img src={image} alt={`This is a very nice toy pic of ${name}`}/>
                        
                </ul>
            </div>
        );
    }
}

export default toycard;
