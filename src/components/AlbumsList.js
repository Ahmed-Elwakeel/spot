import React from 'react';
import {Link} from 'react-router-dom';
function AlbumsList(props) {

  return(
      <ul className="artists_list">
       {props.albums.map((album, i) => {
       			const image = album.images.length? album.images[1].url : "";
       			
       			return(
		       			<li key={i}>
		       				
			       			<Link to={`/album/${album.id}`}>
			       				<div className="artist_img" style={{backgroundImage: `url(${image})`}} >  </div>
			       				<div className="artist_name">{album.name}</div>
			       			</Link>
		       			</li>
	       			)
	       		}
	       	)
       	}
      </ul>
    )
}

export default AlbumsList;