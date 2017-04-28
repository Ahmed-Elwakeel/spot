import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import SearchArtists from './components/SearchArtists'
import SingleArtist from './components/SingleArtist'
class App extends React.Component {

  constructor() {
    super();
  }


  render() {
    return (
      <BrowserRouter>
        <div >
          <Menu className="menu"/>
          <div className="mainBody">
          <Route exact path="/" component={Home} />
          <Route path="/artists" component={SearchArtists} />
          <Route path="/artist/:id" component={SingleArtist} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

function Menu(props) {

  return(
      <ul className="sideMenu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/artists">Artists</Link></li>
      </ul>
    )
}