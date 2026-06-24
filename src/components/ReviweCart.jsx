import React from 'react';

export default function ReviweCart() {
  const testimonials = [
    {
      id: 1,
      name: 'K.Kamal',
      avatar: 'Asseset/Skydiving-and-Parachuting-in-sri-lanka-dp-aviation.jpg',
      quote: '"I now feel more prepared to take on leadership roles and have already started mentoring some of my colleagues."'
    },
    {
      id: 2,
      name: 'Saman S. kumar',
      avatar: 'Asseset/KarlsonGoh-LRCropped_20220117033131.jpg',
      quote: '"I now feel more prepared to take on leadership roles and have already started mentoring some of my colleagues."'
    },
    {
      id: 3,
      name: 'N. Nimal',
      avatar: 'Asseset/dp.webp',
      quote: '"I now feel more prepared to take on leadership roles and have already started mentoring some of my colleagues."'
    },
    {
      id: 4,
      name: 'K.Sumana',
      avatar: 'Asseset/images (2).jpg',
      quote: '"I now feel more prepared to take on leadership roles and have already started mentoring some of my colleagues."'
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-heading">
      <h2 className="section-title testimonials-title" id="testimonials-heading">
        Why people choose us
      </h2>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.id}>
            <div className="testimonial-avatar-wrapper">
              <img src={t.avatar} alt={`${t.name} portrait`} className="testimonial-avatar" />
            </div>
            <h3 className="testimonial-name">{t.name}</h3>
            <p className="testimonial-quote">{t.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
