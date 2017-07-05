import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Creates the component
class AlbumList extends Component {

	// Initial State -- empty list of albums
	state = { albums : [] };

	// Fetch data once the component mounts
	componentDidMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({ albums: response.data }));
		/*.then(response => console.log(response));*/
			/***** ERROR HANDLING *****
			.catch(function (error) {
		    if (error.response) {
		      // The request was made, but the server responded with a status code
		      // that falls out of the range of 2xx
		      console.log(error.response.data);
		      console.log(error.response.status);
		      console.log(error.response.headers);
		    } else {
		      // Something happened in setting up the request that triggered an Error
		      console.log('Error', error.message);
		    }
		    console.log(error.config);
		  });*/
	}

	// Helper method to help generate the list of album details.
	renderAlbums() {
		return this.state.albums.map(album => 
			<AlbumDetail 
				album={album}
				key={album.title}/>

		);
	}

	// Renders the component
	render() {

		console.log(this.state);

		return (
			<View>
				{this.renderAlbums()}
			</View>
		);
	}
}

// Make the component available to the rest of the app
export default AlbumList;