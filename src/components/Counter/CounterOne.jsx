import React, { Component, Fragment } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class CounterOne extends Component {
  state = {
    didViewCountUp: false,
  };
  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };
  render() {
    let Data = [
      {
        countNum: 5000,
        countTitle: "Хэвлэл мэдээллийн салбарын хүмүүст хүрэх.",
      },
      {
        countNum: 500,
        countTitle: "Медиа салбарыг сонирхогч, оюутан залууст хүргэх.",
      },
      {
        countNum: 10000,
        countTitle:
          "Сошиал хуудсуудаараа дамжуулан 10,000 гаруй залууст мэдээллийн боловсрол олгох.",
      },
    ];

    return (
      <Fragment>
        <div className="row">
          {Data.map((value, index) => (
            <div
              className="counterup_style--1 col-lg-4 col-md-4 col-sm-6 col-12"
              key={index}
            >
              <h5 className="counter">
                <VisibilitySensor
                  onChange={this.onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp
                    end={this.state.didViewCountUp ? value.countNum : 0}
                  />
                </VisibilitySensor>
              </h5>
              <p className="description">{value.countTitle}</p>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}
export default CounterOne;
