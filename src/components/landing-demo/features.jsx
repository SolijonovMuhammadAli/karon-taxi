import React from "react";

const features = [
  { name: "BMW", count: 25, url: "/assets/images/brand/bmw.png" },
  {
    url: "/assets/images/brand/chevrolet.png",
    name: "Chevrolet",
    count: 153,
  },
  {
    url: "/assets/images/brand/ferrari.png",
    name: "Ferrari",
    count: 5,
  },
].map((n, i) => ({ ...n, idx: i }));

const Features = () => {
  return (
    <div className="pv-features-area">
      <div className="container">
        <div className="section-title section-center splash-title">
          <span
            className="pre-title"
            data-sal="slide-up"
            data-sal-duration="1000">
            TAXI BRANDLARI
          </span>
          <h2
            className="title"
            data-sal-delay="100"
            data-sal="slide-up"
            data-sal-duration="1000">
            Bizning dasturimmizdan foydalanadigan <br /> mashxur brandlar
          </h2>
        </div>
        <div className="row row--20 row-cols-1 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
          {features.map((i) => (
            <div key={i.idx} className="col">
              <div className="demo-feature">
                <div className="inner">
                  <div className="icon">
                    <img src={i.url} alt="Preview Images" />
                  </div>
                  <h6 className="title">
                    {i.name} <span className="count">{i.count}</span>
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
