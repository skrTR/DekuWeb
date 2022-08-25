import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  render() {
    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
    const { logo, color = "default-color" } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = (
        <img src="/assets/images/medialab/test2.png" alt="Digital Agency" />
      );
    } else if (logo === "dark") {
      logoUrl = (
        <img src="/assets/images/medialab/test2.png" alt="Digital Agency" />
      );
    } else if (logo === "symbol-dark") {
      logoUrl = (
        <img src="/assets/images/medialab/test2.png" alt="Digital Agency" />
      );
    } else if (logo === "symbol-light") {
      logoUrl = (
        <img src="/assets/images/medialab/test2.png" alt="Digital Agency" />
      );
    } else {
      logoUrl = (
        <img src="/assets/images/medialab/test2.png" alt="Digital Agency" />
      );
    }

    return (
      <header
        className={`header-area formobile-menu header--transparent ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">{logoUrl}</a>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li>
                  <Link to="/">Бидний тухай</Link>
                </li>
                <li>
                  <Link to="/news">Нийтлэл</Link>
                </li>
                <li>
                  <Link to="/news-policy">Нийтлэлийн бодлого</Link>
                </li>
                <li>
                  <Link to="/team">Баг</Link>
                </li>
                <li>
                  <Link to="/brochure">Товхимол</Link>
                </li>
                <li>
                  <Link to="/contact">Холбоо барих</Link>
                </li>
              </ul>
            </nav>

            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
