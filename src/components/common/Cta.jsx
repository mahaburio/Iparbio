import React from 'react'
import '../../styles/community/community.css';

const CommunitySection = ({
  title = "Join our Community",
  description = `The premier cellular nutrition, cellular immunity, anti-<br />
  aging, and anti-oxidation technology company`,
  buttonText = "Register Now"
}) => {
  return (
    <section className="community-section">
      <div className="container">
        <div className="dashline-1">
          <div className="img-1 p-img">
            <img src="../images/person-1.webp" alt="" />
          </div>
          <div className="img-2 p-img">
            <img src="../images/person-2.webp" alt="" />
          </div>
          <div className="img-3 p-img">
            <img src="../images/person-3.webp" alt="" />
          </div>
          <div className="dashline-2">
            <div className="img-4 p-img">
              <img src="../images/person-4.webp" alt="" />
            </div>
            <div className="leaf p-img">
              <img src="../images/leaf.webp" alt="" />
            </div>
            <div className="face p-img">
              <img src="../images/face.webp" alt="" />
            </div>
            <div className="dashline-3">
              <div className="content">
                <div className="white-leaf">
                  <img src="../svg/white-leaf.svg" alt="" />
                </div>
                <h1 className="cta-title">{title}</h1>
                <p
                  className="cta-desc"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                <button className="register-btn">{buttonText}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;