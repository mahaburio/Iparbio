import React from 'react';

const TimelineVerticalCard = ({ title, items }) => {
  return (
    <section className="timeline-ver-card py-5">
      <div className="container">
        <h2 className="title black fw-bold text-center">{title}</h2>

        <div className="vertical-card">
          {items.map((item, index) => {
            if (item.type === 'button') {
              return (
                <div key={index} className="timeline-item">
                  <div className="btn-sec mt-4 bg-white d-flex gap-3">
                    <button className="green-btn py-2">{item.label}</button>
                  </div>
                </div>
              );
            }

            return (
              <div key={index} className="timeline-item">
                <div className="title">
                  <h3 dangerouslySetInnerHTML={{ __html: item.heading }} />
                </div>

                <div className="icon-sec">
                  <div className="icon">
                    <img src={item.icon} alt="icon" />
                  </div>
                </div>

                <div className={`content ${item.align || ''}`}>
                  <div className="content-card">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineVerticalCard;
