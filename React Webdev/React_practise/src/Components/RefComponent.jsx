import React, { Component } from 'react'

//This compoenent Focus on the input as soon as its load...
export default class RefComponent extends Component {

    //Defining the constructor for props and state..
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'sourav'
      }

      this.inputRef = React.createRef();
      
      this.handleOnClick = this.handleOnClick.bind(this);
      this.enableFocus = this.enableFocus.bind(this);
    }

    //Defining a function, which can be called when parent component access the ref of the current component..
    enableFocus() {
        this.inputRef.current.focus();
    }

    //once the component did mount successfully...
    // componentDidMount() {
    //     console.log('The component mount successfully');
    //     console.log(this.inputRef);
    //     //Once the count Mount successfully, lets handle the focus..
    //     this.inputRef.current.focus();
    // }

    //Once the button is click, I want to fetch the value from the DOM NODE of Input...
    handleOnClick() {
        alert(this.inputRef.current.value);
    }

    render() {
        return (
        <div>
            <input type="text" placeholder='Enter Text' ref={this.inputRef}/>
            <button type='button' onClick={this.handleOnClick}>Click to alert</button>
        </div>
        )
  }
}
