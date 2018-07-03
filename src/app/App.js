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
    selectedListingId: -1,
  }

  listingSelectEvent = (id) => {
    this.setState({
      selectedListingId: id,
    });
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
    const {selectedListingId, listings} = this.state;
    const selectedListing = listings.find(listing => listing.id === selectedListingId) || {nope: 'nope'};
    return (
      <div className='App'>
        <div className="col-sm-6">
          <Listings
            listings={this.state.listings}
            onListingsSelection={this.listingSelectEvent}
          />
        </div>
        <div className="col-sm-6">
          <Building listing={selectedListing}/>
        </div>
        <div className="col-sm-12">
          <ListingForm/>
        </div>
      </div>
    );
  }
}

export default App;
