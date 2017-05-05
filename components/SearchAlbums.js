import React from 'react';
import axios from 'axios';
import AlbumsList from './AlbumsList'

export default class SearchAlbums extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			albums: []
		}
		this.searchAlbum = this.searchAlbum.bind(this);

	}
	searchAlbum(event){
		event.preventDefault();
		let keyword = this.refs.keyword.value;
		axios.get(`https://api.spotify.com/v1/search?type=album&q=${keyword}`).then(response => {
		 	this.setState({albums: response.data.albums.items});
	    });
		
	}
	render() {
		return(
			<div className="serach">
				<h1> Search for Albums </h1>
				<form className="searchForm" onSubmit={this.searchAlbum}>
					<input className="searchInput"  ref="keyword" type="text" placeholder="Search... "/>
				</form>
				<AlbumsList albums={this.state.albums} />

			</div>
		)
	}
}