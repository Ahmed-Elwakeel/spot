import React from 'react';
import axios from 'axios';
import ArtistsList from './ArtistsList'

export default class SearchArtists extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artists: []
		}
		this.searchArtist = this.searchArtist.bind(this);

	}
	searchArtist(event){
		event.preventDefault();
		let keyword = this.refs.keyword.value;
		axios.get(`https://api.spotify.com/v1/search?type=artist&q=${keyword}`).then(response => {
		 	this.setState({artists: response.data.artists.items});
	    });
		console.log(this.state.artists)
	}
	render() {
		return(
			<div>
				<h1> Search for artists </h1>
				<form onSubmit={this.searchArtist}>
					<input ref="keyword" type="text"/>
				</form>
				<ArtistsList artists={this.state.artists} />

			</div>
		)
	}
}