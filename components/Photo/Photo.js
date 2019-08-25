import React from "react";

const imgWithClick = { cursor: "pointer" };

const Photo = ({ index, onClick, photo, margin, direction, top, left }) => {
  const imgStyle = { margin: margin };
  if (direction === "column") {
    imgStyle.position = "absolute";
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = event => {
    onClick(event, { photo, index });
  };

  return (
    <figure
      onClick={onClick ? handleClick : null}
      style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
      className="effect-lily "
    >
      <img
        {...photo}
        alt="img"
      />
      <figcaption>
        <div>
          <h2>
            Nice <span>Lily</span>
          </h2>
          <p>Lily likes to play with crayons and pencils</p>
        </div>
      </figcaption>
      <style jsx>{`
        figure.effect-lilly {
        overflow:hidden;
        }
        figure.effect-lily img {
          opacity: 1;
          transform:scale(1);
          -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
          transition: opacity 0.35s, transform 0.35s;
        }

        figure.effect-lily figcaption {
          text-align: left;
        }

        figure.effect-lily figcaption > div {
          position: absolute;
          box-sizing: border-box;
          bottom: 0;
          left: 0;
          padding: 1em;
          width: 100%;
          height: auto;
          z-index: 1;
        }

        figure.effect-lily h2,
        figure.effect-lily p {
          -webkit-transform: translate3d(0, 40px, 0);
          transform: translate3d(0, 40px, 0);
        }

        figure.effect-lily h2 {
          opacity: 0;
          -webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
          transition: opacity 0.2s, transform 0.35s;
        }

        figure.effect-lily p {
          opacity: 0;
          -webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
          transition: opacity 0.2s, transform 0.35s;
        }

        figure.effect-lily:after {
          position: absolute;
          top:0;
          left: 0;
          width:100%;
          height:100%;
          content: '';
          opacity: 0;
          transition: 0.3s ease-out;
           // background: linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%);
          // background: linear-gradient(90deg, #efd5ff 0%, #515ada 100%);
          //background: linear-gradient(90deg, #fcff9e 0%, #c67700 100%);
          background: black;
        }
        figure.effect-lily:hover:after {
          content: '';
          opacity: 0.45;
        }

        figure.effect-lily:hover img {
          transform:scale(1.1);
        }


        figure.effect-lily:hover img,
        figure.effect-lily:hover p,
        figure.effect-lily:hover h2 {
          opacity: 0.7;
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
      `}</style>
    </figure>
  );
};

export default Photo;
