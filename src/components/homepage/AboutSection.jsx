import React from 'react'
import { useEffect } from "react";
import { aboutItemsToggle } from '../../utils/custom';


export const AboutSection = () => {
  useEffect(() => {
    aboutItemsToggle();
  }, []);

  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row about-row">
            <div className="col-xl-7 col-lg-6 col-md-6">
              <div className="one py-3 about-item">
                <h4>NUTRIVERO®</h4>
                <h5>Browse our products</h5>
                <p>
                  With Nutrivero®, not only does your body get vitamins and
                  minerals, but also the power of plant nutrients from nature.
                </p>
              </div>
              <div className="two py-3 about-item">
                <h4>Beauty</h4>
                <h5>Browse our products</h5>
                <p>
                  Reduce the appearance of fine lines and wrinkles and restore
                  the youthful vitality and lustre of your skin.
                </p>
              </div>
              <div className="three py-3 about-item">
                <h4>Suncella™</h4>
                <h5>Browse our products</h5>
                <p>
                  With Nutrivero®, not only does your body get vitamins and
                  minerals, but also the power of plant nutrients from nature.
                </p>
              </div>

              <div className="four py-3 about-item">
                <h4>NUTRIVERO®</h4>
                <h5>Browse our products</h5>
                <p>
                  The Suncella women's Intimate Health series is the perfect
                  masterpiece of natural plants, science, and technology.
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="girl-img">
                <img src="../images/girl.webp" alt="About-Girls-Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
