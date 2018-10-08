import React, {Component} from 'react';

class Yelp extends Component {
    constructor(props){
        super(props);
        this.state = {
            yelps: []
        };
    }
    
    componentWillMount(){
        fetch('/results')
        .then(data => data.json())
        .then(yelps => this.setState({yelps}));
    }
    render(){
        return (
            <h1>Yelp</h1>    
        );
    }
}

export default Yelp