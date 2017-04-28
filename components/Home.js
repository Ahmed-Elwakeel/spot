import React from 'react';
import axios from 'axios';
import ArtistsList from './ArtistsList'

export default class Home extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			artists: []	
		}
	}

	componentDidMount(){
		axios.get("https://api.spotify.com/v1/search?type=artist&q=amr").then((response)=>{
			this.setState({artists: response.data.artists.items});
		});
	}

	render() {
		return(
			<div className="page">
				<h1> Home </h1>
				<ArtistsList artists={this.state.artists} />
			</div>
		)
	}
}