'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Artists from './Artists';

function ArtistsDecorator (InnerComponent) {

  return class StatefulForm extends React.Component {


    constructor (props) {
      super(props);
      this.state = {
        artistFilterName: ""       //current entry from input
      }

      this.handleChange= this.handleChange.bind(this)
    }

    handleChange (evt) {
      console.log(evt.target.value);
      console.log("handleChange is running");

      this.setState( {artistFilterName: evt.target.value});



      // var newArtists = this.props.artists.filter( artist =>
      //       artist.search(evt.target.value) );


      console.log("artists", artists)


  }

    render() {
      return (
        <InnerComponent
          artistFilterName={this.state.artistFilterName}
          handleChange={this.handleChange}
          artists={this.props.artists}
          />
      )
    }
  }
}




const mapStateToProps = function (state) {
  return {
    artists: state.artists
  };
};

const statefulComponentCreator = connect(mapStateToProps);
const ArtistsContainer = statefulComponentCreator(ArtistsDecorator(Artists));
export default ArtistsContainer;
