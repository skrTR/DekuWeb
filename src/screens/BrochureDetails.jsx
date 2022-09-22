import React, { useEffect, useState } from "react";
import { FiClock, FiUser } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import axios from "axios";
import moment from "moment";
import "moment/locale/mn";
import PageHelmet from "../components/Helmet/Helmet";
import Header from "../components/Header/Header";
import FooterTwo from "../components/Footer/FooterTwo";
const BrochureDetails = (props) => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get(
        `https://medialabadmin.com/api/v1/brochures/${props.match.params.id}`
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!data) {
    return null;
  }
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Товхимол" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* Start Breadcrump Area */}
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image "
        style={{
          backgroundImage: `url(https://medialabadmin.com/upload/${data.image})`,
        }}
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h2 className="title theme-gradient">{data.title}</h2>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    {moment(data.createdAt).format("MMMM DD, YYYY")}
                  </li>
                  {data.createUser && (
                    <li>
                      <FiUser /> {data.createUser.firstName}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Blog Details */}
      <div className="rn-blog-details pt--110 pb--70 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-wrapper">
                <div className="inner">
                  {data.body &&
                    data.body.map((value, i) => {
                      return (
                        <div
                          key={i}
                          dangerouslySetInnerHTML={{ __html: value }}
                        />
                      );
                    })}
                  {data.body1 &&
                    data.body1.map((value, i) => {
                      return (
                        <div
                          key={i}
                          dangerouslySetInnerHTML={{ __html: value }}
                        />
                      );
                    })}
                  {data.body2 &&
                    data.body2.map((value, i) => {
                      return (
                        <div
                          key={i}
                          dangerouslySetInnerHTML={{ __html: value }}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Details */}
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <FooterTwo />
    </React.Fragment>
  );
};
export default BrochureDetails;
