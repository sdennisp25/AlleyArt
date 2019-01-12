import React, { Component } from "react";
import { Container } from "../../components/Grid";
import "./camera.css";

var canvas;
var ctx;
var video;
var webcamStream;

navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia;

class Camera extends Component {
  state = {
    play: false,
    notplay: true
  };

  startWebcam = () => {
    if (navigator.getUserMedia) {
      this.setState({ play: true });
      navigator.getUserMedia(
        // constraints
        {
          video: true,
          audio: false
        },

        // successCallback
        function(localMediaStream) {
          video = document.querySelector("video");
          // video.src = window.URL.createObjectURL(localMediaStream); //no chrome
          video.srcObject = localMediaStream; //chrome works
          webcamStream = localMediaStream;
        },

        // errorCallback
        function(err) {
          console.log("The following error occured: " + err);
        }
      );
    } else {
      console.log("getUserMedia not supported");
    }
  };

  stopWebcam = () => {
		this.setState({ notplay: true})
    webcamStream.stop();
  };

  init = () => {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
  };

  snapshot = () => {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height).bind(this);
  };

  render() {
    return (
      <Container>
        <div className="row">
          <div className="col s12 m6">
            <div className="card-camera blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">
                  Click on the Start WebCam button.
                </span>

                <div onLoad={this.init}>
                  <p>
                    <button onClick={this.startWebcam}>Start WebCam</button>
                    <button onClick={this.stopWebcam}>Stop WebCam</button>
                    <button onClick={this.snapshot}>Take Snapshot</button>
                  </p>
                  <video
                    id="video"
                    // onClick={this.snapshot(this)}
                    width="100%"
                    controls
                    autoPlay
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <div className="card-snap blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Captured Image</span>
                <canvas id="myCanvas" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Camera;
