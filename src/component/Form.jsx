import React, { Component } from 'react';

class Form extends Component {

        state ={
            name: "",
            image: ""
        }

        handleAllChange= (evt) => {
            // console.log(evt.target); 
            const {name, value} = evt.target
            this.setState({
                [name]: value  
            })
          
        }

        handleSubmit = (evt) => {
            evt.preventDefault()

            this.props.submitNewToy(this.state)
        }




    render() {
        const {name, image} = this.state
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="enter toy name"
                    value={name} //getting info from state
                    onChange={this.handleAllChange} //sending info back to state
                    
                    ></input>
                    <input
                     id="image"
                     type="text"
                     name="image"
                     placeholder="enter toy image"
                     value={image}
                     onChange={this.handleAllChange}
                    
                    ></input>
                    <button type="submit">button</button>
                </form>
            </div>
        );
    }
}

export default Form;