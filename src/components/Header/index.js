import React from 'react';
import './Header.css';
// eslint-disable-next-line
export default ({ black }) => {

  return (
    <header className={black ? 'black' : ''}>
      <div className="logo">
        <a href="/">
          <img src="https://logosmarcas.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="Netflix" />
        </a>
      </div>
      <div className="user">
        <a href="/">
          <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="usuário" />
        </a>
      </div>
    </header>
  );
}