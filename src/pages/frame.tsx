import { FunctionComponent } from "react";
import VideoWorkflowContainer from "../components/hero-page";
import "./frame.css";
const Frame: FunctionComponent = () => {
  return (
    <div className="header-parent">
      <section className="header" id="hero">
        <VideoWorkflowContainer />
        {/* <div className="sponser">
          <div className="lorem-ipsum-dolor">Sponsored by:</div>
          <img className="logo-icon" alt="" src="/logosSvg.svg" />
        </div> */}
        <div className="menu">
          <div className="home">Login</div>
          <button className="home-adversite-wrapper">
            <b className="home1">Get Started</b>
          </button>
          <div className="home-container">
            {/* <span className="home-container1">
              <span className="get-in-touch">Home How to use</span>
              <span className="get-in-touch">Get in touch</span>
              <span className="get-in-touch">About</span>
            </span> */}
          </div>
          {/* <img className="search-icon" alt="" src="/search-svg.svg" /> */}
          <div className="logo">
            <img className="s-1-icon" alt="" src="/logo.svg" />
            <div className="petro">PrevRun</div>
          </div>
          <img className="lock-icon" alt="" src="/lockSvg.svg" />
        </div>
      </section>
    </div>
  );
};

export default Frame;
