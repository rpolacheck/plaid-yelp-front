import React, {Component} from 'react';
import 'whatwg-fetch';

const urlForName = name =>
`https://api.yelp.com/v3/businesses/WavvLdfdP6g8aZTtbBQHTw/${name}`;

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
        })
       .then(d => d.json())
       .then(d => {
           this.setState({
                yelpData: d   
           });
       });
    }
    render(){
        if(!this.state.yelpData) return <p>Loading....</p>;
        return (
            <div>
                <h2>{this.state.yelpData.name}</h2>
            </div>
        );
    }
}

export default Yelp;