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
	}
	render() {
		return(
			<div className="serach">
				<h1> Search for artists </h1>
				<form className="searchForm" onSubmit={this.searchArtist}>
					<input className="searchInput"  ref="keyword" type="text" placeholder="Search... "/>
				</form>
				<ArtistsList artists={this.state.artists} />

			</div>
		)
	}
}