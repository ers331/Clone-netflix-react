import React from 'react';
import './FeaturedMovie.css';
// eslint-disable-next-line
export default ({ item }) => {

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="info">
            <div className="points">{item.vote_average} pontos</div>
            <div className="year">{firstDate.getFullYear()}</div>
            <div className="seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
          </div>
          <div className="description">{item.overview}</div>
          <div className="btns">
            <a href={`/watch/${item.id}`} className="whatbtn"> ► Assitir</a>
            <a href={`/list/add/${item.id}`} className="blackbtn"> + Minha Lista</a>

          </div>
          <div className="genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
        </div>

      </div>
    </section>
  );

}