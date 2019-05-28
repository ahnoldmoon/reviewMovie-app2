// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component{

//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }

//     render(){
//         // console.log(this.props.title);
//         // console.log(this.props);
//         return(
//             <div>
//                 <MoviePoster poster={this.props.poster} />
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

function Movie({title, poster}){
    return(
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

// class MoviePoster extends Component{

//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }

//     render(){
//         console.log(this.props);
//         return(
//             // <img src="https://i.pinimg.com/236x/70/91/19/709119861d5e6870f47d552d60365025--hangers-hunting.jpg"/>
//             <img src={this.props.poster} />
//         )
//     }
// }

function MoviePoster({poster}){
    return(
        <img src={poster} alt="Movie Poster" />
    )
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;