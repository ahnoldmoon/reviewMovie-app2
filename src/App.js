import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

// function App() {
//   return (
//     <div className="App">
//       hello!!
//     </div>
//   );
// }

// const movieTitles = [
//   "Matrix",
//   "Full Metal Jacket",
//   "Oldboy",
//   "Star Wars"
// ]

// const movieImages = [
//   "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
//   "https://images-na.ssl-images-amazon.com/images/I/91A%2B9lmEcxL._SX342_.jpg",
//   "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
//   "https://i.ytimg.com/vi/ngElkyQ6Rhs/hqdefault.jpg"
// ]



class App extends Component{

  // componentWillMount(){
  //   console.log('will mount')
  // }

  // componentDidMount(){
  //   console.log('did mount')
  // }

  state = {
    greeting: 'Hello',
    movies: [
      {
        title: "Matrix",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
      },
      {
        title: "Full Metal Jacket",
        poster: "https://images-na.ssl-images-amazon.com/images/I/91A%2B9lmEcxL._SX342_.jpg"
      },
      {
        title: "Oldboy",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
      },
      {
        title: "Star Wars",
        poster: "https://i.ytimg.com/vi/ngElkyQ6Rhs/hqdefault.jpg"
      }
    ]
  }

  componentDidMount(){
    // setTimeout(() => {
    //   this.setState({
    //     greeting: 'Hello again!!!'
    //   })
    // }, 3000)
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Trainspotting",
            poster: "https://secure.i.telegraph.co.uk/multimedia/archive/02809/TRAINSPOTTING_2809300b.jpg"
          },
          ...this.state.movies
        ]
      })
    },2000)
  }

  render(){
    // console.log('did render')
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
