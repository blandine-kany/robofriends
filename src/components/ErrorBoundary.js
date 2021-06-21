import React, {Component} from 'react';

class ErrorBoundary extends Component {

    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(){
        this.setState({hasError: true});
    }
    render() {
        if(this.state.hasError)
        return <h1> Sorry, Bill Gates is hacking us again 😞 </h1>;

        return this.props.children;
    }
}

export default ErrorBoundary;