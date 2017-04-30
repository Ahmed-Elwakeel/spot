import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import SearchArtists from './components/SearchArtists'
import SingleArtist from './components/SingleArtist'
import Player from './Player'
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      queue: [],
      currentIndex: null
    }
    this.playTrack = this.playTrack.bind(this);
      this.nextTrack = this.nextTrack.bind(this);

  }

  playTrack(tracks, index) {
    this.setState({queue: tracks, currentIndex: index});
  }
  nextTrack(){
    this.setState({currentIndex: this.state.currentIndex+1});
  }
  render() {
    return (
      <BrowserRouter>
        <div >
          <Player nextTrack={this.nextTrack} current={this.state.queue[this.state.currentIndex]}/>
          <Menu className="menu"/>
          <div className="mainBody">
          <Route exact path="/" component={Home} />
          <Route path="/artists" component={SearchArtists} />
          <Route path="/artist/:id" 
          render={(routeProps) => <SingleArtist  playTrack={this.playTrack} {...routeProps}/>}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

function Menu(props) {

  return(
      <div>
        <ul className="sideMenu">
          <img className="logo" src={require('./images/logo.png')} />
          <div className="menuContainer">
            <li><Link to="/" activeClassName="activeLink">Home</Link></li>
            <li><Link to="/artists" activeClassName="activeLink">Artists</Link></li>
          </div>
        </ul>
      </div>
    )
}