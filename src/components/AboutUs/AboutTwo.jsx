import React, { Component } from "react";

class AboutTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="/assets/images/medialab/aboutus.png"
                    alt="About Images"
                  />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">Media Lab бол</h2>
                    <p className="description">
                      Media Lab бол Монголын медиа салбарт шинэ салхи оруулж
                      салбарын хөгжил, хүлээн авагчдын боловсролыг дээшлүүлэх
                      зорилготой залуу үеийн төлөөллийн хэрэгжүүлж буй төсөл юм.
                    </p>
                  </div>
                  <div className="row mt--30 mt_sm--10">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Бид бол</h3>
                        <p>
                          Медиа салбарын экосистемийн хөгжлийг ахисан шатанд
                          гаргахыг эрмэлзэгчид
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Бид бол</h3>
                        <p>
                          Залуусын мэдээллийн боловсролыг дээшлүүлж, зөв шийдвэр
                          гаргах мэдээ мэдээллийг хүргэхээр тэмүүлж буй салбарын
                          залуу төлөөлөгчид
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default AboutTwo;
