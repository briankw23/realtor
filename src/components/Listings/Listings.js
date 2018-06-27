import React from 'react';
import './Listings.css';

class Listings extends React.Component {
  render () {
    const {listings} = this.props;
    const listingsItemsComponents = listings.map((listing) => {
      return (
        <li key={listing.id} index={listing.id}>{listing.price}</li>
      );
    });
    return (
      <div className='Listings'>
        <h2>Listings</h2>
        <ul>
          {listingsItemsComponents}
        </ul>
      </div>
    );
  }
}

export default Listings;
