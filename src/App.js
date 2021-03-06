import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import './App.css';
import MovieRow from './components/MovieRow'
import FeaturedMovei from './components/FeaturedMovie';
import Header from './components/Header';

// eslint-disable-next-line
export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedata] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomelist();
      setMovieList(list);

      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let choseInfo = await Tmdb.getMoveiInfo(chosen.id, 'tv');
      setFeaturedata(choseInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {

    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, []);

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&

        <FeaturedMovei item={featuredData} />

      }


      <section className="lists">
        {movieList.map((item, key) => (
          <div>
            <MovieRow key={key} title={item.title} items={item.items} />
          </div>
        ))}
      </section>

      <footer>
        Desenvolvido com <span role="img" aria-label="coração">❤️</span> Everson Ramiro<br />
        Direitos da Imagem para NetFlix<br />
        Dados pegos do site Themoviedb.org
      </footer>

      {movieList.length <= 0 &&

        <div className="loading">
          <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="carregando netflix" />
        </div>
      }
    </div>
  )

}
