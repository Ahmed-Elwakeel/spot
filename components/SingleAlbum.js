import React from 'react';
import axios from 'axios';
import TracksList from './TracksList';
import {Link} from 'react-router-dom';

export default class SingleAlbum extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			album: {},
			albumTracks: []
		}
	}


	render() {

		if(Object.getOwnPropertyNames(this.state.album).length !== 0){
			const image = this.state.album.images.length? this.state.album.images[0].url : "";
			return(
				<div >
					<div className="single-album__info"> 
						<div className="single-album__img" style={{backgroundImage: `url(${image})`}}></div>
						<div className="single-album__name">{this.state.album.name} </div>
						<div className="single-album__artist">{this.state.album.artists[0].name}</div>
						<div>{this.state.albumTracks.length} tracks</div>
						<Link className="button" to={`/artist/${this.state.album.artists[0].id}`}>Artist profile</Link>

					</div>
					<div className="single-album__container">						
						<TracksList albumImage={this.state.album.images[2].url} tracks={this.state.albumTracks} playTrack={this.props.playTrack} isActive={this.props.isActive}/>
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
		axios.get(`https://api.spotify.com/v1/albums/${id}`).then((
			response) => {
				this.setState({album: response.data});
		});
		axios.get(`https://api.spotify.com/v1/albums/${id}/tracks?country=SE`).then((
			response) => {
				this.setState({albumTracks: response.data.items});
		});
		
	}
}