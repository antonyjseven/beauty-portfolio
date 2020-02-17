import React from "react";
import { CSSTransition } from "react-transition-group";
import ProgressiveImage from 'react-progressive-image';
const imgWithClick = { cursor: "pointer" };

const Photo = ({ index, onClick, photo, margin, direction, top, left }) => {
  const imgStyle = { margin: margin };
  if (direction === "column") {
    imgStyle.position = "absolute";
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const transitionDelay = index * 75 + 'ms';

  const handleClick = event => {
    onClick(event, { photo, index });
  };

  return (
      <>
        {console.log('image is rerendering, photo', photo)}
      <CSSTransition
          in={true}
          enter={true}
          timeout={100}
          classNames="image-transition"
          appear
      >
    <figure
      onClick={onClick ? handleClick : null}
      style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
    >
        <>
          {/*<ProgressiveImage delay={1000} src={photo.src} placeholder="/static/images/beauty-1.jpg">*/}
          <ProgressiveImage delay={5000} src={photo.src} placeholder="/static/images/beauty-1 (1).png">
            {src => <img {...photo} src={src} alt="an image" />}
          </ProgressiveImage>
          {/*<img className={`${styles.class}`} {...photo} alt="img" />*/}
        </>
      <style jsx>{`

        // React-transition-group animation part

        .list-transition-enter,
        .image-transition-appear {
          position: relative;
          opacity: 0!important;
          top: -100px;
          // color: transparent;
          // background-color: #5a564c;
          transition: all 0.8s!important;
        }

        .image-transition-appear-done {
        opacity: 1!important;
          position: relative;
          top: 0;
          // color: unset;
          // background-color: #5a564c;
          transition: all 500ms!important;
          transition-delay:${transitionDelay}!important;
        }
      `}</style>
    </figure>
      </CSSTransition>
      </>
  );
};

export default Photo;
