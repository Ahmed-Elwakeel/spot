import React from 'react';
import ReactPlayer from 'react-player';
export default class Player extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			playing:true
		}
		this.togglePlay = this.togglePlay.bind(this);
	}
	togglePlay(){
		this.setState({playing: !this.state.playing});
	}
	handleProgress(played){

	}
	render(){
		console.log(this.props.current)
		if(this.props.current == undefined){
			return null;
		}
		return(
			<div>
				<div className="player">
					<div className="track-info">
						<h5>{this.props.current.name}</h5>					
						<h5>{this.props.current.artists[0].name}</h5>
					</div>
					<div className="track-controls">
						<button onClick={this.togglePlay}>{this.state.playing ? "pause" : "play"} </button>
						<button onClick={this.props.nextTrack}> NEXT </button>
					</div>
					<ReactPlayer  onProgress={this.handleProgress} url={this.props.current.preview_url} hidden playing ={this.state.playing}/>
				</div>
			</div>
		)
	}
} 
