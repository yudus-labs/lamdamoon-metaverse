import React from "react";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

const markdown = `**Lambomoon Metaverse** is an experimental NFT game, which is built on top of Moonbeam/Polkadot and Unreal Engine 5.

**Lambomoon** is the moon of **Lambo**, the 3rd planet in **L.A.M.B.O solar system**. This is where you can build moonbase, spaceship, your army, even tele-portal powered by dark matter. All such things are stepping stones for you to explore, secure the land, collect resource, find ancient alien technology blueprint, and fight with monster to earn **Lambonium** reward on outlandish planets in a far-far away galaxy from earth.

And if getting bored, you can start a war with other players to take over their asset if you win ( you may lose though ). You can even fly spaceship in Lambo sky and fight with others.

Such activities, will happen in an immersive realistic 3D experience, powered by the most advanced game engine in the world.

And the greatest thing is, you own everything you try hard to achieve. It is permanently stored on blockchain, no one is able to take it from you.

You got hyped already ? Great, now let's fuel your spaceship and fly to the moon.
`;

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
              <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Copyright() {
  return (
    <div className="copyright">
      <div className="row">
        <div className="col-auto">
          A proud product of{" "}
          <a className="custom-link" href="https://yudus.dev">
            Yudus Labs
          </a>{" "}
          and{" "}
          <a className="custom-link" href="https://lambomoon.ventures">
            Lambomoon Ventures
          </a>
          <br />
          Details are available at our{" "}
          <a
            className="custom-link"
            href="https://medium.com/lambomoon-metaverse"
          >
            Medium
          </a>
          <br />
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
          content="A high-end NFT metaverse powered by Moonbeam/Polkadot and Unreal Engine 5"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://lambomoon.xyz/" />
        <meta property="twitter:title" content="Lambomoon Metaverse" />
        <meta
          property="twitter:description"
          content="A high-end NFT metaverse powered by Moonbeam/Polkadot and Unreal Engine 5"
        />
        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/yudus-labs/lambomoon-metaverse/master/static/logo-full.png"
        />

        <meta property="og:url" content="https://lambomoon.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lambomoon Metaverse" />
        <meta
          property="og:description"
          content="A high-end NFT metaverse powered by Moonbeam/Polkadot and Unreal Engine 5"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/yudus-labs/lambomoon-metaverse/master/static/logo-full.png"
        />
      </Helmet>
      <div className="row">
        <div className="col">
          {/* <Logo /> */}
          <Intro />
          <Copyright />
        </div>
      </div>
    </div>
  );
}
