import React from 'react';
import MovieList from './components/MovieList';

function App() {
  const movies = [
    {
      name: 'The Shawshank Redemption',
      date: '1994',
      genre: 'Drama',
      plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      imdbLink: 'https://www.imdb.com/title/tt0111161/',
      imgUrl: 'https://m.media-amazon.com/images/I/51x65RBuFnL._AC_UF894,1000_QL80_.jpg'
    },
    {
      name: 'The Godfather',
      date: '1972',
      genre: 'Crime, Drama',
      plot: 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.',
      imdbLink: 'https://www.imdb.com/title/tt0068646/',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg'
    },
    {
      name: 'The Dark Knight',
      date: '2008',
      genre: 'Action, Crime, Drama',
      plot: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      imdbLink: 'https://www.imdb.com/title/tt0468569/',
      imgUrl: 'https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg'
    },
    {
      name: 'Inception',
      date: '2010',
      genre: 'Action, Adventure, Sci-Fi',
      plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      imdbLink: 'https://www.imdb.com/title/tt1375666/',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'
    },
    {
      name: 'Forrest Gump',
      date: '1994',
      genre: 'Drama, Romance',
      plot: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
      imdbLink: 'https://www.imdb.com/title/tt0109830/',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg'
    },
    
  ];

  return (
    <div className="app">
      <h1>My Movie Collection</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;