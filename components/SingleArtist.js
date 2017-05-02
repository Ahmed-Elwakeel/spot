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
				<div >
					<div className="single-artist__img" style={{backgroundImage: `url(${image})`}}>
						<div className="info">
							<p> {this.state.artist.followers.total} Followers </p>
							<h1> {this.state.artist.name} </h1>
							<button className="button b1"><a>Follow </a></button>
							<button className="button b2">Play All </button>
						</div>
					</div>
					<div className="single-aritst__container">
						
						<h2> Top Tracks</h2>
						<TracksList tracks={this.state.topTracks.tracks} playTrack={this.props.playTrack} isActive={this.props.isActive}/>
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