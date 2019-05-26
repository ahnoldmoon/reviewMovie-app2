import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster />
                <h1>hello this is a movie</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://i.pinimg.com/236x/70/91/19/709119861d5e6870f47d552d60365025--hangers-hunting.jpg"/>
        )
    }
}

export default Movie;