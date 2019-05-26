import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }

    render(){
        // console.log(this.props.title);
        // console.log(this.props);
        return(
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{

    static propTypes = {
        poster: PropTypes.string.isRequired
    }

    render(){
        console.log(this.props);
        return(
            // <img src="https://i.pinimg.com/236x/70/91/19/709119861d5e6870f47d552d60365025--hangers-hunting.jpg"/>
            <img src={this.props.poster} />
        )
    }
}

export default Movie;