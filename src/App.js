import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import Home from './components/Home'
import SearchArtists from './components/SearchArtists'
import SingleArtist from './components/SingleArtist'
import SearchAlbums from './components/SearchAlbums'
import SingleAlbum from './components/SingleAlbum'
import Player from './Player'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      queue: [],
      currentIndex: null,
      currentID:"",
      albumImage:""
    }
    this.playTrack = this.playTrack.bind(this);
    this.nextTrack = this.nextTrack.bind(this);
    this.isActive = this.isActive.bind(this);

  }

  playTrack(tracks, index,id,albumImageURL) {
    if(albumImageURL === "")
      this.setState({queue: tracks, currentIndex: index , currentID: id});
    else
      this.setState({queue: tracks, currentIndex: index , currentID: id, albumImage:albumImageURL});

  }
  nextTrack(){

    if(this.state.currentIndex === 9){
      this.setState({currentIndex: 0});
    }
    else
      this.setState({currentIndex: this.state.currentIndex+1});
  }
  isActive(id){
    if(this.state===undefined || this.state.currentID === "")
      return false;
    return ((id===this.state.currentID ) ? true:false);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="all">
          <Player albumImage={this.state.albumImage} nextTrack={this.nextTrack} current={this.state.queue[this.state.currentIndex]}/>
          <Menu />
          <div className="mainBody">
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/artists" component={SearchArtists} />
              <Route path="/albums" component={SearchAlbums} />
              <Route path="/artist/:id" 
              render={(routeProps) => <SingleArtist  playTrack={this.playTrack} isActive={this.isActive}{...routeProps}/>}/>
              <Route path="/album/:id" 
              render={(routeProps) => <SingleAlbum  playTrack={this.playTrack} isActive={this.isActive}{...routeProps}/>}/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

function Menu(props) {
var FontAwesome = require('react-fontawesome');
  
 
  return(
        <ul className="sideMenu">
        
          <img alt="logo" className="logo" src={require('./images/logo.png')} />
          <div className="menuContainer row">
              <NavLink activeStyle={{opacity: 1}} exact={true} activeClassName='is-active' to='/'>Home</NavLink>
              <NavLink activeStyle={{opacity: 1}} to="/albums">Albums</NavLink>
              <NavLink activeStyle={{opacity: 1}} to="/artists">Artists</NavLink>
              <FontAwesome
                name='user-o'
                className="userName"
                style={{color: 'white', marginLeft:'10px', marginBottom: '5px'}}/>
            <a className="userName">User name</a>
          </div>
        </ul>
    )
}