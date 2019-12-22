import React from 'react';

import  "./LoaderSkeletonCard.scss";

const LoaderSkeletonCard = (props) => {

  return (
    <div className="container">
      <section className="card">
        <figure className="card-image loading"></figure>
        <div className="card-detail">
          <h3 className="card-title loading"></h3>
          <p className="card-description loading"></p>
        </div>
      </section>
    </div>)
}

export default LoaderSkeletonCard;