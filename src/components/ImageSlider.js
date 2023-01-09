import React from "react";
import ImageGallery from "react-image-gallery";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

class ImageSliderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myImageRef = React.createRef();
    this.onFullscreen = this.onFullscreen.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.onPause = this.onPause.bind(this);
    this.onMoveToSlide = this.onMoveToSlide.bind(this);

    // Iterate through the images and add the thumbnail and orignal property
    this.images = this.props.imgs.map((img) => {
      return {
        original: process.env.PUBLIC_URL + img,
        thumbnail: process.env.PUBLIC_URL + img,
      };
    });
  }

  onFullscreen() {
    this.myImageRef.current.fullScreen();
  }
  onPlay() {
    this.myImageRef.current.play();
  }
  onPause() {
    this.myImageRef.current.pause();
  }
  onMoveToSlide() {
    // Index start from 0 so 2 will move to 3rd slide
    this.myImageRef.current.slideToIndex(2);
  }

  onEventTrigger(eventName) {
  }

  render() {
    return (
      <div className="wrapper">
        <ImageGallery
          items={this.images}
          infinite={true}
          lazyLoad={true}
          autoPlay={true}
          slideDuration={500}
          onSlide={() => this.onEventTrigger("onSlide")}
          onClick={() => this.onEventTrigger("onClick")}
          onTouchMove={() => this.onEventTrigger("onTouchMove")}
          ref={this.myImageRef}
        />
      </div>
    );
  }
}
export default ImageSliderComponent;
