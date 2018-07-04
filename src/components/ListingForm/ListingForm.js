import React from 'react';

import './ListingForm.css';

class ListingForm extends React.Component {
  state ={
    newListing: {
      address: '',
      city: '',
      state: '',
      squareFootage: '',
      zipCode: '',
    },
  }

  formFieldStringState = (name, e) => {
    const tempListing = {...this.state.newListing};
    tempListing[name] = e.target.value;
    this.setState({newListing: tempListing});
  }

  formFieldNumberState = (name, e) => {
    const tempListing = {...this.state.newListing};
    tempListing[name] = e.target.value * 1;
    this.setState({newListing: tempListing});
  }

  addressChange = (e) => {
    this.formFieldStringState('address', e);
  }
  cityChange = (e) => {
    this.formFieldStringState('city', e);
  }
  stateChange = (e) => {
    this.formFieldStringState('state', e);
  }
  squareFootageChange = (e) => {
    this.formFieldNumberState('squareFootage', e);
  }
  zipCodeChange = (e) => {
    this.formFieldNumberState('zipCode', e);
  }
  formSubmit = (e) => {
    const {onSubmit} = this.props;
    e.preventDefault();
    console.error('you click submit', e);
    onSubmit(this.state.newListing);
  }
  render () {
    const {newListing} = this.state;
    return (
      <div className='ListingForm col-xs-8 col-xs-offset-2'>
        <h2 className="text-center">Submit New Property:</h2>
        <form onSubmit={this.formSubmit}>
          <div className="row">
            <fieldset className="col-xs-3">
              <label htmlFor="address">Address:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="address"
                placeholder="1234 Main Street"
                value= {newListing.address}
                onChange={this.addressChange}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="city">City:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="city"
                placeholder="Nashville"
                value= {newListing.city}
                onChange={this.cityChange}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="city">State:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="state"
                placeholder="Tennessee"
                value= {newListing.state}
                onChange={this.stateChange}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="city">ZipCode:</label>
              <br />
              <input
                className="col-xs-12"
                type="number"
                id="zipCode"
                placeholder="37208"
                value= {newListing.zipCode}
                onChange={this.zipCodeChange}
              />
            </fieldset>

          </div>
          <div className="row">
            <fieldset className="col-xs-3">
              <label htmlFor="city">Sqaure Footage:</label>
              <br />
              <input
                className="col-xs-12"
                type="number"
                id="squareFootage"
                placeholder="12345"
                value= {newListing.squareFootage}
                onChange={this.squareFootageChange}
              />
            </fieldset>
          </div>
          <button className="col-xs-6 col-xs-offset-3 btn btn-danger">Save House</button>
        </form>
      </div>
    );
  }
}

export default ListingForm;
