import React, { Component } from "react";
import "./Youtube.css";
import "../../css/bootstrap.css";

// https://www.googleapis.com/youtube/v3/search?"api key" &channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=1

// https://developers.google.com/youtube/v3 => documenation.


class Youtube extends Component {
  constructor() {
    super();
    this.state = {
      youTubeData: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBn9Ojgv7A4_8JGMYYXCBd0xd_GcnhU1gA&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
    )
      .then((response) => response.json())
      .then((data) => {
        const youTubeData = data.items;
        this.setState({ youTubeData });
      });
  }

  render() {
    return (
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              </div>
            </div>
            {this.state.youTubeData.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}

            {this.videoWrapper}
          </div>
        </div>
      </div>
    );
  }
}

export default Youtube;
