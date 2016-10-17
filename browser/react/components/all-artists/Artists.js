'use strict';

import React from 'react';
import { Link } from 'react-router';

export default function (props) {
  const artists = props.artists;

  console.log("artists", artists)
  console.log("props.artistFilterName", props.artistFilterName)

  var newArtists = artists.filter( function (artist){
        console.log(artist.name, "artist.name")
        console.log("expression", artist.name.search(props.artistFilterName))
        if(artist.name.search(props.artistFilterName) === -1) {
          return false;
        }
        return true;

  });
  console.log("newArtists", newArtists);

  // var newArtists = artists.filter( artist =>
  //       artist.search(props.artistFilterName) );
  // console.log("newArtists", newArtists);


  return (
    <div>
      <h3>Artists</h3>
      <input type="text" className="form-group" name="searchArtist" onChange={props.handleChange} />
      <div className="list-group">
        {
          newArtists.map(artist => (
            <div className="list-group-item" key={ artist.id }>
              <Link to={`/artists/${artist.id}`}>
                { artist.name }
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
