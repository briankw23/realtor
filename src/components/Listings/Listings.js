import React from 'react';
import PropTypes from 'prop-types';
import {listingShape} from '../../propz/listingProp';
import './Listings.css';
import ListingItem from '../ListingItem/ListingItem';

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(listingShape),
    onListingsSelection: PropTypes.func,
  }
  render () {
    const {listings, onListingsSelection} = this.props;
    const listingsItemsComponents = listings.map((listing, index) => {
      return (

        <ListingItem
          key={listing.id}
          index={index}
          listing={listing}
          onSelect={onListingsSelection}
        />
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
