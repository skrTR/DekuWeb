import React, { Component } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import PageHelmet from "../components/Helmet/Helmet";
import Breadcrumb from "../components/BreadCrumb/Breadcrumb";
import BlogList from "../components/News/BlogList";
import Header from "../components/Header/Header";
import FooterTwo from "../components/Footer/FooterTwo";

class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Нийтлэл" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo183.png"
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Нийтлэл"} />
        {/* End Breadcrump Area */}

        {/* Start Blog Area */}
        <div className="rn-blog-area ptb--120 bg_color--1">
          <div className="container">
            <BlogList />
          </div>
        </div>
        {/* End Blog Area */}

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
  }
}
export default Blog;
