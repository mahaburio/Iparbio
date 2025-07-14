import React from 'react';
import '../../styles/hero-section/hero.css'

const AboutHero = ({ title, description, shapeUrl, imageUrl, imageUrlShow = true, RightSection = true }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="container p-lg-5 p-lg-4 py-5 p-3">
          <div className="row">
            {/* Left Content */}
            <div className="col-xl-6 col-lg-6 left-content">
              <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
              <div className="desc">{description}</div>
            </div>

            {/* Right Image */}
            {RightSection && (
              <>
                <div className="col-xl-6 col-lg-6 right-img">
                  <div className="green-leaf">
                    <img src={shapeUrl} alt="Logo-Shape" />
                    {imageUrlShow && (
                      <>
                        <div className="person-img">
                          <img src={imageUrl} alt="Person Image" />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero