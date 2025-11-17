import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import { Button } from "react-bootstrap";

const PropertiesGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [thumbs, setThumbs] = useState(images.slice(1));
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Lightbox slides from current state
  const slides = [mainImage, ...thumbs].map(img => ({
    src: img.src,
    alt: img.title,
    title: img.title
  }));

  const goNext = () => {
    const currentIndex = images.findIndex(img => img.src === mainImage.src);
    const nextIndex = (currentIndex + 1) % images.length;
    const nextImage = images[nextIndex];

    setMainImage(nextImage);
    setThumbs(images.filter(img => img.src !== nextImage.src));
  };

  const goPrev = () => {
    const currentIndex = images.findIndex(img => img.src === mainImage.src);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const prevImage = images[prevIndex];

    setMainImage(prevImage);
    setThumbs(images.filter(img => img.src !== prevImage.src));
  };

  const handleThumbClick = (img) => {
    setMainImage(img);
    setThumbs(images.filter(item => item.src !== img.src));
  };

  return (
    <>
      <div className="gallery-container">
        
        {/* MAIN DISPLAY */}
        <div className="main-image-area">
          
          <img
            src={mainImage.src}
            alt={mainImage.title}
            className="main-image"
            onClick={() => setLightboxOpen(true)}
          />

          <div className="gallery_arrows">
            <Button className="arrow left" onClick={goPrev}>
                <FontAwesomeIcon icon={faChevronLeft}   />
            </Button>
            <Button className="arrow right" onClick={goNext}>
                <FontAwesomeIcon icon={faChevronRight}   />
            </Button>
          </div>

        </div>

        {/* THUMBNAILS */}
        <div className="thumb-list">
          {thumbs.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.title}
              className="thumb"
              onClick={() => handleThumbClick(img)}
            />
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={slides}
          plugins={[Zoom, Fullscreen, Thumbnails, Slideshow]}
        />
      )}
    </>
  );
};

export default PropertiesGallery;
