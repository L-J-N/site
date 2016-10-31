import React from 'react';

import './index.css';

const Comment = () => {
  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src="http://placehold.it/128x128" alt="" />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros,
            eu pellentesque tortor vestibulum ut. Maecenas non massa sem.
            Etiam finibus odio quis feugiat facilisis.
             </p>
        </div>
      </div>
    </article>
  );
};

export default (props) => {
  const comments = Array.apply(null, { length: 10 });
  return (
    <div className="projet-commentaire">
      {comments.map((c, i) => <Comment key={i} />)}
    </div>
  );
};
