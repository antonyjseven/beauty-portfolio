import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import { photos } from "../../photos";
import Photo from "../Photo/Photo";

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery
        photos={photos}
        renderImage={props => (
            <Photo {...props} />
        )}
        margin={3}
        direction={"column"}
        onClick={openLightbox}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <style jsx>
        {`
          body {
            background: red!important;
          }
          figure.effect-lily img {
            max-width: none;
            width: -webkit-calc(100% + 50px);
            width: calc(100% + 50px);
            opacity: 0.7;
            -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
            transition: opacity 0.35s, transform 0.35s;
            -webkit-transform: translate3d(-40px, 0, 0);
            transform: translate3d(-40px, 0, 0);
          }

          figure.effect-lily figcaption {
            text-align: left;
          }

          figure.effect-lily figcaption > div {
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 2em;
            width: 100%;
            height: 50%;
          }

          figure.effect-lily h2,
          figure.effect-lily p {
            -webkit-transform: translate3d(0, 40px, 0);
            transform: translate3d(0, 40px, 0);
          }

          figure.effect-lily h2 {
            -webkit-transition: -webkit-transform 0.35s;
            transition: transform 0.35s;
          }

          figure.effect-lily p {
            color: rgba(255, 255, 255, 0.8);
            opacity: 0;
            -webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
            transition: opacity 0.2s, transform 0.35s;
          }

          figure.effect-lily:hover img,
          figure.effect-lily:hover p {
            opacity: 1;
          }

          figure.effect-lily:hover img,
          figure.effect-lily:hover h2,
          figure.effect-lily:hover p {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }

          figure.effect-lily:hover p {
            -webkit-transition-delay: 0.05s;
            transition-delay: 0.05s;
            -webkit-transition-duration: 0.35s;
            transition-duration: 0.35s;
          }
        `}
      </style>
    </div>
  );
};
export default GallerySection;
