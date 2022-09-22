import React, { Fragment, useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import Form from "react-bootstrap/Form";
import { FiCast, FiLayers, FiUsers, FiChevronUp } from "react-icons/fi";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import ScrollToTop from "react-scroll-up";
import Button from "react-bootstrap/Button";
import Header from "../components/Header/Header";
import CounterOne from "../components/Counter/CounterOne";
import Testimonial from "../components/Testimonial/Testimonial";
import BrandTwo from "../components/SponseredCompany/BrandTwo";
import FooterTwo from "../components/Footer/FooterTwo";
import Helmet from "../components/Helmet/Helmet";
import AboutTwo from "../components/AboutUs/AboutTwo";

const image1 = "/assets/images/bg/paralax/black.jpg";
const logo = "/assets/images/medialab/2new.png";
const ServiceLists = [
  {
    icon: <FiCast />,
    title: "Медиа салбарын тоймыг хүргэх",
    description:
      "Дэлхийн болон монголын медиа салбарын тоймыг долоо хоног бүрийн даваа гарагийн өглөө 06:30 цагт и-мейлээр хүргэнэ.",
  },
  {
    icon: <FiLayers />,
    title: "Мэдээллийн боловсрол олгох",
    description:
      "Хүлээн авагчдад мэдээлэлд шүүлтүүртэй хандах, зөв ашиглах, хуурамч мэдээллийг ялган таних зэрэг мэдээллийг боловсролыг олгоно.",
  },
  {
    icon: <FiUsers />,
    title: "Салбарын судалгаа хийх",
    description:
      "Медиа салбарт тулгамдаж буй асуудлыг судлах зорилгоор судалгаа шинжилгээг мэргэжлийн түвшинд хийнэ.",
  },
];
const HomeScreen = () => {
  const [PostList, setPostList] = useState([]);
  const getData = () => {
    axios
      .get(`https://medialabadmin.com/api/v1/articles?limit=3&-createdAt`)
      .then((res) => {
        setPostList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Fragment>
      <Helmet pageTitle="Бидний тухай" />
      <Header logo="light" />
      {/* Start Slider Area   */}
      <div className="slider-activation slider-creative-agency">
        <Parallax bgImage={image1} strength={850}>
          <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className={`inner text-center`}>
                    <img src={logo} alt="logo" />
                    <p className="description">
                      Та мэдээллийн боловсрол, медиа зах зээлийн тоймыг даваа
                      гараг бүрийн өглөө 06:30 цагт и-мейлээрээ хүргүүлэн авахыг
                      хүсэж байна уу?
                    </p>
                    <InputGroup className="mt-5">
                      <Form.Control
                        placeholder="И-мэйл "
                        aria-describedby="basic-addon2"
                      />
                      <Button
                        variant="outline-secondary"
                        id="button-addon2"
                        style={{ backgroundColor: "#00853e", color: "white" }}
                      >
                        Илгээх
                      </Button>
                    </InputGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
      {/* End Slider Area   */}
      {/* About us start */}
      <div className="about-area ptb--120">
        <AboutTwo />
      </div>
      {/* About us  end*/}
      <div className="service-area ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30">
                <h2>БИДНИЙ ҮЙЛ АЖИЛЛАГААНЫ ЧИГЛЭЛ</h2>
              </div>
            </div>
          </div>
          <div className="row service-one-wrapper">
            {ServiceLists.map((val, i) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                key={i}
              >
                <div className="service service__style--2">
                  <div className="icon" style={{ color: "#00853e" }}>
                    {val.icon}
                  </div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Start CounterUp Area */}
      <div className="rn-counterup-area pt--140 p pb--110 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="fontWeight500">Бидний зорилт тоогоор</h3>
              </div>
            </div>
          </div>
          <CounterOne />
        </div>
      </div>
      {/* End CounterUp Area */}

      {/* Start Blog Area */}
      <div className="rn-blog-area pt--120 pb--80 bg_color--1">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-12">
              <div className="section-title text-center service-style--3">
                <h2>Нийтлэл</h2>
              </div>
            </div>
          </div>
          <div className="row mt--60">
            {PostList.map((value, i) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                <div className="blog blog-style--1">
                  <div className="thumbnail">
                    <a href={`/news-details/${value._id}`}>
                      <img
                        className="w-100"
                        src={`https://medialabadmin.com/upload/${value.profile}`}
                        alt="Blog Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <p className="blogtype">{value.category}</p>
                    <h4 className="title">
                      <a href={`/news-details/${value._id}`}>{value.title}</a>
                    </h4>
                    <div className="blog-btn">
                      <a
                        className="rn-btn text-white"
                        href={`/news-details/${value._id}`}
                      >
                        Унших
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {PostList.length > 3 && (
            <div className="row">
              <div className="col-lg-12">
                <div className="view-more-btn mt--20 text-center">
                  <a className="rn-button-style--2 btn-solid" href="/blog">
                    <span>Дахиад унших</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* End Blog Area */}
      {/* Start Testimonial Area */}
      <div className="rn-testimonial-area bg_color--1 ptb--120">
        <div className="container">
          <Testimonial />
        </div>
      </div>
      {/* End Testimonial Area */}

      {/* Start Brand Area */}
      <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <BrandTwo />
            </div>
          </div>
        </div>
      </div>
      {/* End Brand Area */}

      {/* Start Footer Style  */}
      <FooterTwo />
      {/* End Footer Style  */}
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </Fragment>
  );
};

export default HomeScreen;
