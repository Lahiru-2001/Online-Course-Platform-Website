import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import CourseCart from './components/CourseCart';
import Partners from './components/Partners';
import ReviweCart from './components/ReviweCart';

export default function App() {
  const [showAllPopular, setShowAllPopular] = useState(false);
  const [showAllRecent, setShowAllRecent] = useState(false);

  const popularCertificates = [
    {
      id: 'card-1',
      imgSrc: 'Asseset/Screenshot 2026-06-17 172005.png',
      imgAlt: 'Industrial Fluid Systems equipment control panel',
      publisherLogo: 'Asseset/images (1).png',
      publisherAlt: 'University of Moratuwa logo',
      publisherName: 'University of moratuwa',
      title: 'Industrial Fluid systems & Smart Factory Automation',
      duration: '3 month',
      price: 'LKR 3500'
    },
    {
      id: 'card-2',
      imgSrc: 'Asseset/5.png',
      imgAlt: 'Annual Pass Sale promotion with analyst woman and metrics screen',
      publisherLogo: 'Asseset/google.webp',
      publisherAlt: 'Google logo',
      publisherName: 'Google',
      title: 'Industrial Fluid systems & Smart Factory Automation',
      duration: '6 month',
      price: 'LKR 2500'
    },
    {
      id: 'card-3',
      imgSrc: 'Asseset/Screenshot 2026-06-17 171946.png',
      imgAlt: 'Google IT Automation with Python course banner with tutor',
      publisherLogo: 'Asseset/images.jpg',
      publisherAlt: 'University of Kelaniya logo',
      publisherName: 'University of kalniya',
      title: 'Google IT Automation with Python',
      duration: '1 year',
      price: 'LKR 1500'
    },
    {
      id: 'card-4',
      imgSrc: 'Asseset/Screenshot 2026-06-17 172625.png',
      imgAlt: 'Factory robotic bottle production conveyor line',
      publisherLogo: 'Asseset/google.webp',
      publisherAlt: 'Google logo',
      publisherName: 'Google',
      title: 'Industrial Fluid systems & Smart Factory Automation',
      duration: '3 month',
      price: 'LKR 3000'
    },
    // Extra cards shown on "Show more"
    {
      id: 'card-5',
      imgSrc: 'Asseset/Screenshot 2026-06-17 172625.png',
      imgAlt: 'Factory robotic conveyor automation',
      publisherLogo: 'Asseset/images (1).png',
      publisherAlt: 'University of Moratuwa logo',
      publisherName: 'University of moratuwa',
      title: 'Introduction to Smart Factory Automation',
      duration: '2 month',
      price: 'LKR 2800'
    },
    {
      id: 'card-6',
      imgSrc: 'Asseset/Screenshot 2026-06-17 171946.png',
      imgAlt: 'Python coding workspace',
      publisherLogo: 'Asseset/google.webp',
      publisherAlt: 'Google logo',
      publisherName: 'Google',
      title: 'Python for Automation & Data Processing',
      duration: '4 month',
      price: 'LKR 3200'
    },
    {
      id: 'card-7',
      imgSrc: 'Asseset/Screenshot 2026-06-17 172005.png',
      imgAlt: 'Advanced mechanical hydraulics setup',
      publisherLogo: 'Asseset/images.jpg',
      publisherAlt: 'University of Kelaniya logo',
      publisherName: 'University of kalniya',
      title: 'Advanced Fluid Power & Pneumatic Control',
      duration: '6 month',
      price: 'LKR 4500'
    },
    {
      id: 'card-8',
      imgSrc: 'Asseset/5.png',
      imgAlt: 'Industrial IoT Analytics interface',
      publisherLogo: 'Asseset/images (1).png',
      publisherAlt: 'University of Moratuwa logo',
      publisherName: 'University of moratuwa',
      title: 'Machine Learning for Industrial IoT Systems',
      duration: '3 month',
      price: 'LKR 3800'
    }
  ];

  const recentlyViewedProducts = [
    {
      id: 'recent-card-1',
      imgSrc: 'Asseset/Screenshot 2026-06-17 173733.png',
      imgAlt: 'Student studying at home with laptop',
      publisherLogo: 'Asseset/images (1).png',
      publisherAlt: 'University of Moratuwa logo',
      publisherName: 'University of moratuwa',
      title: 'AI for day today life and industry level for all',
      duration: '3 month',
      price: 'LKR 3500'
    },
    {
      id: 'recent-card-2',
      imgSrc: 'Asseset/Screenshot 2026-06-17 173922.png',
      imgAlt: 'Head with mechanical gear systems illustration',
      publisherLogo: 'Asseset/images.png',
      publisherAlt: 'Company logo',
      publisherName: 'Company',
      title: 'Learning mechation',
      duration: '2 month',
      price: 'LKR 3500'
    },
    {
      id: 'recent-card-3',
      imgSrc: 'Asseset/Screenshot 2026-06-17 174057.png',
      imgAlt: 'Brain MRI imaging research visual',
      publisherLogo: 'Asseset/images.png',
      publisherAlt: 'University logo',
      publisherName: 'University',
      title: 'Image Segmentation, Filtering, and Region Analysis',
      duration: '3 hours',
      price: 'LKR 3500'
    },
    {
      id: 'recent-card-4',
      imgSrc: 'Asseset/699055838af7c6.38201554.webp',
      imgAlt: 'Developer isometric illustration coding on a desk',
      publisherLogo: 'Asseset/images (1).jpg',
      publisherAlt: 'OpenAI logo',
      publisherName: 'Open AI',
      title: 'Web Development with vibe code',
      duration: '2 Weekes',
      price: 'LKR 3500'
    },
    // Extra cards shown on "Show more"
    {
      id: 'recent-card-5',
      imgSrc: 'Asseset/dp.webp',
      imgAlt: 'OpenAI neural network logo',
      publisherLogo: 'Asseset/images (1).jpg',
      publisherAlt: 'OpenAI logo',
      publisherName: 'Open AI',
      title: 'Generative AI Foundations & Prompt Design',
      duration: '1 Week',
      price: 'LKR 2000'
    },
    {
      id: 'recent-card-6',
      imgSrc: 'Asseset/Screenshot 2026-06-17 173922.png',
      imgAlt: 'Mechatronic arm gear layout',
      publisherLogo: 'Asseset/images.png',
      publisherAlt: 'Company logo',
      publisherName: 'Company',
      title: 'Robotic Systems Engineering & Kinematics',
      duration: '4 month',
      price: 'LKR 5000'
    },
    {
      id: 'recent-card-7',
      imgSrc: 'Asseset/Screenshot 2026-06-17 174057.png',
      imgAlt: 'Computer vision filtering',
      publisherLogo: 'Asseset/images.png',
      publisherAlt: 'University logo',
      publisherName: 'University',
      title: 'Deep Learning for Computer Vision Applications',
      duration: '2 month',
      price: 'LKR 4200'
    },
    {
      id: 'recent-card-8',
      imgSrc: 'Asseset/Screenshot 2026-06-17 173733.png',
      imgAlt: 'Data science analyst screen',
      publisherLogo: 'Asseset/images (1).png',
      publisherAlt: 'University of Moratuwa logo',
      publisherName: 'University of moratuwa',
      title: 'Data Analytics & Automation using Python',
      duration: '3 month',
      price: 'LKR 3100'
    }
  ];

  // Slice list depending on the toggle state
  const visiblePopular = showAllPopular ? popularCertificates : popularCertificates.slice(0, 4);
  const visibleRecent = showAllRecent ? recentlyViewedProducts : recentlyViewedProducts.slice(0, 4);

  return (
    <>
      {/* Top Header Bar */}
      <Header />

      <main id="main-content">
        {/* Hero Slider Section with full-width white background wrapper */}
        <div className="hero-slider-wrapper">
          <div className="container">
            <HeroSlider />
          </div>
        </div>

        {/* Main Content Container (boxed content sitting on the page background) */}
        <div className="container">
          {/* Most Popular Certificates Section */}
          <section className="certificates-section" id="certificates" aria-labelledby="section-heading">
            <h2 className="section-title" id="section-heading">
              Most Popular Certificates
            </h2>

            <div className="certificates-grid">
              {visiblePopular.map((cert) => (
                <CourseCart key={cert.id} {...cert} />
              ))}
            </div>

            <div className="show-more-wrapper">
              <button
                className="btn-show-more"
                id="show-more-btn"
                onClick={() => setShowAllPopular(!showAllPopular)}
              >
                {showAllPopular ? 'Show less' : 'Show more'}
              </button>
            </div>
          </section>

          {/* Recently Viewed Products Section */}
          <section className="certificates-section" id="recently-viewed" aria-labelledby="recently-viewed-heading">
            <h2 className="section-title" id="recently-viewed-heading">
              Recently Viewed Products
            </h2>

            <div className="certificates-grid">
              {visibleRecent.map((product) => (
                <CourseCart key={product.id} {...product} />
              ))}
            </div>

            <div className="show-more-wrapper">
              <button
                className="btn-show-more"
                id="show-more-recent-btn"
                onClick={() => setShowAllRecent(!showAllRecent)}
              >
                {showAllRecent ? 'Show less' : 'Show more'}
              </button>
            </div>
          </section>

          {/* Partners Section */}
          <Partners />

          {/* Testimonials Section */}
          <ReviweCart />
        </div>
      </main>
    </>
  );
}
