import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import GallerySection from "../components/GallerySection/GallerySection";
import Nav from "../components/nav";
import { recent } from '../photos/recent'

const Home = () => {
    const [photos, setPhotos] = useState(recent);
    return (
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
        margin: 0;
      }
    `}</style>
            <Head>
                <title>Home</title>
            </Head>
            <Header />
            <Nav photos={{photos: [photos, setPhotos]}}/>
            <div className={'gallery-wrapper'} style={{marginTop: '20px'}}>
                <GallerySection photos={photos} />
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
    `}</style>
        </div>
    );
};

export default Home;
