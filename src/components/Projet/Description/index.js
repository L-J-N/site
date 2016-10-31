import React from 'react';
import ReactPlayer from 'react-player';
import './index.css';

export default (props) => {
  return (
    <div className="content is-medium projet-descritption">
      <h1 className="title is-1" >
        Présentation
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
       nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
      <figure className="description-image">
        <img src="http://placehold.it/640x360" alt="" />
      </figure>
      <h1 className="title is-1" >
        Notre objectif
      </h1>
      <ReactPlayer className="description-video" url="https://www.youtube.com/watch?v=nITLob098W8" controls="true">
      </ReactPlayer>
      <h1 className="title is-1" >
        Bla bla
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
       nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
    </div>
  );
};
