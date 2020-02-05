import React from "react";
import Flickity from "react-flickity-component";

const flickityOptions = {
  initialIndex: 0,
  pageDots: false,
  // freeScroll: true,
  // wrapAround: true,
  contain: true,
  prevNextButtons: true,
  // autoPlay: 1500,
  // pauseAutoPlayOnHover: true,
  setGallerySize: false,
  lazyLoad: true
};

export default function EventsSlider(props) {
  return (
    <Flickity
      className={"carousel"}
      elementType={"div"}
      options={flickityOptions}
      disableImagesLoaded={false}
      reloadOnUpdate
    >
      {props.eventImages.map((image, index) => (
        <div class="carousel-cell">
          <img
            class="carousel-cell-image"
            data-flickity-lazyload={image}
            src={image}
            alt=""
          />
        </div>
      ))}
    </Flickity>
  );
}
