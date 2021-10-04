import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

function Logo() {
  return (
    <div className="row justify-content-center">
      <div className="col-auto">
        <div className="logo">
          <img
            src="logo-short.png"
            className="img-rounded img-logo"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="intro">
      <div className="row justify-content-center">
        <div className="col-auto">
          <div className="row justify-content-center color-teal intro-main">
            <p>
              welcome to <span className="color-golden">L.A.M.B.O</span> Solar
              System
            </p>
          </div>

          <div className="row justify-content-center color-cyan intro-sub">
            <div className="col-auto">
              <p align="center">
                <b>Lambomoon</b> is the moon of L.A.M.B.O, the third planet in
                L.A.M.B.O solar system
                <br />
                <br />
                powered by{" "}
                <a className="custom-link" href="https://moonbeam.network">
                  Moonbeam
                </a>
                ,{" "}
                <a className="custom-link" href="https://polkadot.network">
                  Polkadot
                </a>{" "}
                and{" "}
                <a className="custom-link" href="https://unrealengine.com">
                  Unreal Engine 5
                </a>
                <br />
                <br />
                backed by{" "}
                <a className="custom-link" href="https://lambomoon.ventures">
                  Lambomoon Ventures
                </a>
                <br />
                <br />
                ...more details coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="container home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lambomoon Metaverse</title>
        <meta
          name="description"
          content="A metaverse of L.A.M.B.O Solar System"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://lambomoon.xyz/" />
        <meta property="twitter:title" content="Lambomoon Metaverse" />
        <meta
          property="twitter:description"
          content="A metaverse of L.A.M.B.O Solar System"
        />
        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/duyyudus/lambomoon-metaverse/master/static/logo-full.png"
        />

        <meta property="og:url" content="https://lambomoon.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lambomoon Metaverse" />
        <meta
          property="og:description"
          content="A metaverse of L.A.M.B.O Solar System"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/duyyudus/lambomoon-metaverse/master/static/logo-full.png"
        />
      </Helmet>
      <div className="row">
        <div className="col">
          {/* <Logo /> */}
          <Intro />
        </div>
      </div>
    </div>
  );
}
