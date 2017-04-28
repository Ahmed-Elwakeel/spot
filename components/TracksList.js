import React from 'react';
import {Link} from 'react-router-dom';

function TracksList(props) {

	console.log(props.tracks)
	console.log("helo")

	if(props.tracks !== undefined )
	  return(
	      <ul>
	       {props.tracks.map((track, i) => {
	       			return(
			       			<li key={i}>
				       			<div> {i+1} {track.name} {track.duration_ms}</div>
			       			</li>
		       			)
		       		}
		       	)
	       	}
	      </ul>
	    )
	else
		return(
			<div>No Tracks</div>
		)
}

export default TracksList;