import React from "react";
import { FiChevronUp } from "react-icons/fi";
import TeamOne from "../components/Team/TeamOne";
import PageHelmet from "../components/Helmet/Helmet";
import Breadcrumb from "../components/BreadCrumb/Breadcrumb";
import ScrollToTop from "react-scroll-up";
import Header from "../components/Header/Header";
import FooterTwo from "../components/Footer/FooterTwo";

const Team = () => {
  return (
    <>
      <PageHelmet pageTitle="Баг" />
      {/* Start Header Area  */}
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* End Header Area  */}

      {/* Start Breadcrump Area */}
      <Breadcrumb title={"Баг"} />
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper  */}
      <main className="page-wrapper">
        {/* Start Team Area  */}
        <div className="rn-team-wrapper ptb--120 bg_color--1">
          <div className="rn-team-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--30">
                    <h2>Манай баг хамт олон</h2>
                    {/* <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p> */}
                  </div>
                </div>
              </div>
              <TeamOne
                column="col-lg-3"
                teamStyle="team-style--bottom"
                item="8"
              />
            </div>
          </div>
        </div>
        {/* End Team Area  */}
      </main>
      {/* End Page Wrapper  */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      {/* Start Footer Area  */}
      <FooterTwo />
      {/* End Footer Area  */}
    </>
  );
};

export default Team;
