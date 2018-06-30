import React from 'react';
import PropTypes from 'prop-types';
import {listingShape} from '../../propz/listingProp';
import './Listings.css';

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(listingShape),
  }
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
