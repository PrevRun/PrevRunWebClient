import { FunctionComponent, memo } from "react";
import "./hero-page.css";

const VideoWorkflowContainer: FunctionComponent = memo(() => {
  return (
    <div className="frame">
      <h1 className="simplify-video-workflows" style={{ marginTop: "10rem" }}>
        Coming Soon...
      </h1>
      {/* <div className="text">
        <div className="lorem-ipsum-dolor-container">
          <p className="effortless-process">
            Effortless Process | Instant Video Uploads | Smooth Collaboration
          </p>
        </div>
      </div> */}
      {/* <div className="feild"> */}
        {/* <div className="lorem-ipsum-dolor1">Enter Email address</div> */}
      {/* </div> */}
      {/* <button className="button"> */}
        {/* <b className="lorem-ipsum-dolor2">Get Started</b> */}
      {/* </button> */}
      <img className="illustration-icon" alt="" src="/illustration.svg" />
    </div>
  );
});

export default VideoWorkflowContainer;
