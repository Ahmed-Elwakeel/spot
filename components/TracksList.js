import React from 'react';
import {Link} from 'react-router-dom';

function TracksList(props) {

	console.log(props.isActive.bind(this,0).value);
	const tracks = props.tracks;
	if(props.tracks !== undefined )
	  return(
	      <ul className="track-list">
	       {props.tracks.map((track, i) => {
	       			return(

			       			<li className={props.isActive.bind(this,i) ? '' : ''} key={i} onClick={() => props.playTrack(tracks,i)}>
				       			<div className="table">
				       				<div className="tableCell">{i+1}.</div>
				       				<div className="tableCell">{track.name}</div> 
				       				<div className="tableCell">{track.duration_ms}</div>
				       			</div>
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