import React from 'react';

function TracksList(props) {

	const tracks = props.tracks;
	if(props.tracks !== undefined )
	  return(
	      <ul className="track-list">
	       {props.tracks.map((track, i) => {
	       			return(

			       			<li className={props.isActive(tracks[i].id) ? 'greenActive' : ''} key={i} onClick={() => props.playTrack(tracks,i,tracks[i].id, props.albumImage)}>
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