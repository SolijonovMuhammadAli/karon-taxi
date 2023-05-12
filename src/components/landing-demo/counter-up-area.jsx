import React from "react";
import Counter from "../common/counter";

const CounterUpArea = () => {
  return (
    <div className="pv-demo-counterup">
      <div className="container">
        <div className="counterup-wrap">
          <div className="row">
            <div className="col-sm-4">
              <div className="edu-counterup counterup-style-1 border-end">
                <h2 className="counter-item count-number primary-color">
                  <span className="odometer">
                    <Counter number="737" text="+" />
                  </span>
                </h2>
                <span className="title">Yo'lovchilar</span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="edu-counterup counterup-style-1 border-end">
                <h2 className="counter-item count-number secondary-color">
                  <span className="odometer">
                    <Counter number="235" text="+" />
                  </span>
                </h2>
                <span className="title">Haydovchilar</span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="edu-counterup counterup-style-1">
                <h2 className="counter-item count-number extra02-color">
                  <span className="odometer">
                    <Counter number="975" text="+" />
                  </span>
                </h2>
                <span className="title">Buyurtmalar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterUpArea;
