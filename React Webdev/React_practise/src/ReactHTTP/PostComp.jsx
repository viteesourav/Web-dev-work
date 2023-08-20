import React, { Component } from 'react'

//UtilityFunction to post the data using Fetch...
const postInfo = async (payload) => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: payload
    });
    console.log(resp);
    return await resp.json();
}


//Component contains a stateControlled Form, On Submit it should post the data... 
export default class PostComp extends Component {
    
  constructor(props) {
    super(props)
  
    this.state = {
       userId: "",
       title: "",
       body: "",
       isDataPosted: null
    }
  }  

  //using arraow function, No need to bind `this` with eventHandlers in constructor..
  //Keep the state and from Input in sync...
  handleOnChange = (evt) => {
    // console.log(evt);
    this.setState(prevState => (
        {
            ...prevState,
            [evt.target.name]: evt.target.value
        }
    ))
  }

  //handles on click of the Submit, Fetch the data from the state and post it...
  handleOnSubmit = (evt) => {
    evt.preventDefault();
    const payload = this.state;
    postInfo()
    .then(resp => {
        console.log('Post successful', resp);
        this.showSavedPopup(resp);

    })
    .catch(err => {
        console.log('Something went Wrong', err);
    })
  }

  //handles the message when the Data is posted successfully... 
  showSavedPopup = (response) => {
    //Enable the popup message => Update the state 
    this.setState(prevState => (
        {
            ...prevState,
            isDataPosted: response.id
        }
    ));
    //Implements the windows, SetTimeOut for enabling a Timeout of 5s then update state to remove the popup..
    setTimeout(()=> {
        this.setState(prevState => (
            {
                ...prevState,
                isDataPosted: null
            }
        ));
    }, 5000);
  }

  render() {
    //Go Practise to destructure the state before you use the JSX to render the UI...
    const{userId, title, body, isDataPosted} = this.state;

    return (
      <div>
        <h2>Add new Data</h2>
        <form onSubmit={this.handleOnSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'space-evenly'
        }}>
            <input type="text" name='userId' placeholder='Enter UserId' value={userId} onChange={this.handleOnChange}/>
            <input type="text" name='title' placeholder='Enter Title' value={title} onChange={this.handleOnChange}/>
            <textarea name='body' value={body} cols="30" rows="10" onChange={this.handleOnChange}></textarea>
            <button>Submit</button>
        </form>
        {isDataPosted != null && <h2>The Record is posted successfully with id: {isDataPosted}</h2>}
      </div>
    )
  }
}
