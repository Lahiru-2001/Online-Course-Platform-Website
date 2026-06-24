import React from 'react';

export default function CourseCart({
  id,
  imgSrc,
  imgAlt,
  publisherLogo,
  publisherAlt,
  publisherName,
  title,
  duration,
  price
}) {
  return (
    <article className="card" id={id}>
      <div className="card-img-wrapper">
        <img src={imgSrc} alt={imgAlt} className="card-img" loading="lazy" />
      </div>
      <div className="card-body">
        <div className="card-publisher">
          <img src={publisherLogo} alt={publisherAlt} className="publisher-logo" />
          <span className="publisher-name">{publisherName}</span>
        </div>
        <h3 className="card-title">{title}</h3>
        <div className="card-footer">
          <span className="course-duration">{duration}</span>
          <span className="course-price">{price}</span>
        </div>
      </div>
    </article>
  );
}
