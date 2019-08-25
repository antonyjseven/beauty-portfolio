import React from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header/Header";
import GallerySection from "../components/GallerySection/GallerySection";

const Home = () => (
  <div>
    <style global jsx>{`
      @font-face {
        font-family: "FranklinGothic-Book";
        src: url("/static/fonts/FranklinGothic-Book.eot?#iefix")
            format("embedded-opentype"),
          url("/static/fonts/FranklinGothic-Book.woff") format("woff"),
          url("/static/fonts/FranklinGothic-Book.ttf") format("truetype"),
          url("/static/fonts/FranklinGothic-Book.svg#FranklinGothic-Book")
            format("svg");
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "Aquatico-Regular";
        src: url("/static/fonts/Aquatico-Regular.eot?#iefix")
            format("embedded-opentype"),
          url("/static/fonts/Aquatico-Regular.otf") format("opentype"),
          url("/static/fonts/Aquatico-Regular.woff") format("woff"),
          url("/static/fonts/Aquatico-Regular.ttf") format("truetype"),
          url("/static/fonts/Aquatico-Regular.svg#Aquatico-Regular")
            format("svg");
        font-weight: normal;
        font-style: normal;
      }

      body {
        font-family: "FranklinGothic-Book";
      }
    `}</style>
    <Head>
      <title>Home</title>
    </Head>
    <Header />

    <div className={'gallery-wrapper'}>
        <GallerySection />
    </div>

    <style jsx>{`
      .gallery-wrapper {
        margin: 0 auto;
        max-width: 996px
      }
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
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
    `}</style>
  </div>
);

export default Home;
