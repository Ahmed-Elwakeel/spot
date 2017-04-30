import React from 'react';
import {Link} from 'react-router-dom';

function TracksList(props) {

	console.log(props.tracks)
	console.log("helo")
	const tracks = props.tracks;
	if(props.tracks !== undefined )
	  return(
	      <ul>
	       {props.tracks.map((track, i) => {
	       			return(
			       			<li key={i} onClick={() => props.playTrack(tracks,i)}>
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