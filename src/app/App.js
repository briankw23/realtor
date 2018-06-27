import React, { Component } from 'react';

import Listings from '../components/Listings/Listings';
import Building from '../components/Building/Building';
import ListingForm from '../components/ListingForm/ListingForm';
import connection from '../firebaseRequests/connection';
import listingRequest from '../firebaseRequests/listings';

import './App.css';

class App extends Component {
  state = {
    listings: [],
  }
  componentDidMount () {
    connection();
    listingRequest.getRequest()
      .then((listings) => {
        this.setState({listings});
      })
      .catch((err) => {
        console.error('error with get', err);
      });
  }
  render () {
    return (
      <div className='App'>
        <div className="col-sm-6">
          <Listings listings={this.state.listings}/>
        </div>
        <div className="col-sm-6">
          <Building/>
        </div>
        <div className="col-sm-12">
          <ListingForm/>
        </div>
      </div>
    );
  }
}

export default App;
