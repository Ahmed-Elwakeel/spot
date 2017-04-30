import React from 'react';
import axios from 'axios';
import TracksList from './TracksList';

export default class SingleArtist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artist: {},
			topTracks: []
		}
	}


	render() {

		if(Object.getOwnPropertyNames(this.state.artist).length !== 0){
			const image = this.state.artist.images.length? this.state.artist.images[0].url : "";

			return(
				<div>
				<div> <img src={image}/></div>
				<div>
					<div> {this.state.artist.followers.total} </div>
					<h1> {this.state.artist.name} </h1>
					<h2> Top Tracks</h2>
					<TracksList tracks={this.state.topTracks.tracks} playTrack={this.props.playTrack}/>
				</div>
				</div>
			)
		}else
			return(
				<div>  Loading </div>
			)
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		axios.get(`https://api.spotify.com/v1/artists/${id}`).then((
			response) => {
				this.setState({artist: response.data});
		});
		axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=SE`).then((
			response) => {
				this.setState({topTracks: response.data});
		});
	}
}