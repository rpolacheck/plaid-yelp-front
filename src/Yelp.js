import React, {Component} from 'react';
import 'whatwg-fetch';

const urlForName = name =>
`https://api.yelp.com/v3/businesses/{id}/${name}`;

// const urlForLocation = location =>
// `https://api.yelp.com/v3/businesses/search${location.city}`;

class Yelp extends Component {
    constructor(props){
        super(props);
        this.state = {
            requestFailed: false
        };
    }
    
    componentDidMount(){
       window.fetch(urlForName(this.props.name))
        .then(response => {
            if(!response.ok) {
                throw Error("Network Request Failed");
            }
            
            return response;
        })
       .then(d => d.json())
       .then(d => {
           this.setState({
                yelpData: d   
           });
       }, () => {
           this.setState({
               requestFailed: true
           });
       });
    }
    render(){
        if(this.state.requestFailed)return <p>Failed</p>
        if(!this.state.yelpData) return <p>Loading....</p>;
        return (
            <div>
                <h2>{this.state.yelpData.name}</h2>
            </div>
        );
    }
}

export default Yelp;