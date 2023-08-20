import React, {Component} from 'react'

const counterHOC = (WrappedComponent) => {
    class CounterHOC extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count: 0
          }
        }

        handleIncrementCount = () => {
            this.setState(prevState => (
                {
                    count: prevState.count+1
                }
            ))
        }

        render() {
            return (
                <WrappedComponent 
                    counter={this.state.count} 
                    incrementCount={this.handleIncrementCount} 
                    {...this.props}   //This is imporant step to pass other props from Apps -> HOC -> WrappedComponent..
                />
            )
        }
    }

return CounterHOC;
}

export default counterHOC;
