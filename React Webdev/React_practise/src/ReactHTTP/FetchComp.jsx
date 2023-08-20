import React, { Component } from 'react'

//utility async Function to make a service call using Fetch...
const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data.splice(0, 10);
} 


export default class FetchComp extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         titlesList: [],
         errorState: false
      }
    }

    //Makes a service call as soon as the components load and upadate the state..
    componentDidMount() {
        fetchData()
        .then(titleResp => {
            console.log('FetchedLsit:', titleResp);
            this.setState(prevState => (
                {   ...prevState,
                    titlesList: titleResp
                }
            ))
        })
        .catch(err => {
            this.setState(prevState => (
                {   ...prevState,
                    errorState: true
                }
            ))
        })
        
    }

    render() {
    const {titlesList, errorState} = this.state;
    return (
      <div>
        <h4>Top 10 titles from jsonPlaceholder API</h4>
        <ul>
            {(titlesList.length > 0 && !errorState) ? titlesList.map(titleObj => (
                <li key={titleObj.id}> {titleObj.title} </li>
            )): <h2>Something went Wrong ! Check URL</h2>}
        </ul>
      </div>
    )
  }
}
