import React from 'react';
import ReactPlayer from 'react-player';
export default class Player extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			playing:true,
			playedSeconds:0,
			loadedSeconds:30,
			perc:0
		}
		this.togglePlay = this.togglePlay.bind(this);
		this.handleProgress = this.handleProgress.bind(this);
	}
	togglePlay(){
		this.setState({playing: !this.state.playing});
	}
	handleProgress(played){
		if(played.loadedSeconds != undefined){
			var loadedparse =  Math.floor(played.loadedSeconds)
			this.setState({loadedSeconds: loadedparse});
		}
		var parse = Math.ceil(played.playedSeconds)
		var perc = (parse / this.state.loadedSeconds)*100 || 0;
		this.setState({perc: perc , playedSeconds: parse});
		console.log(played);
	}
	render(){
			var playedseconds = 0;

		if(this.props.current == undefined){
			return null;
		}
				console.log(this.props.current.album.images[2])

		return(
			<div>
				<div className="player">
					<div className="track-info">
						<div className="albumImage" style={{backgroundImage: `url(${this.props.current.album.images[2].url})`}}> </div>
						<h5>{this.props.current.name}</h5>					
						<h5>{this.props.current.artists[0].name}</h5>
					</div>
					<div className="track-control-container">
						
						<div className="track-controls">
							<div className="played">{this.state.playedSeconds}</div>
						
							<div className="loaded">{this.state.loadedSeconds}</div>
							<button onClick={this.togglePlay}>{this.state.playing ? "pause" : "play"} </button>
							<button onClick={this.props.nextTrack}> NEXT </button>
							
							<div className="bar" > 
								<div className="progress-bar" style={{width:`${this.state.perc}%`}}></div>
							</div>
						 
						</div>
					</div>
					<ReactPlayer onProgress={this.handleProgress} url={this.props.current.preview_url} hidden playing ={this.state.playing}/>
				</div>
			</div>
		)
	}
} 
