import React from 'react';
import {Link} from 'react-router-dom';
function ArtistList(props) {

  return(
      <ul className="artists_list">
       {props.artists.map((artist, i) => {
       			const image = artist.images.length? artist.images[1].url : "";
       			
       			return(
		       			<li key={i}>
		       				
			       			<Link to={`/artist/${artist.id}`}>
			       				<div className="artist_img" style={{backgroundImage: `url(${image})`}} >  </div>
			       				<div className="artist_name">{artist.name}</div>
			       			</Link>
		       			</li>
	       			)
	       		}
	       	)
       	}
      </ul>
    )
}

export default ArtistList;