import React, { Component } from "react";

import appletv from "../../images/icons/logo_light__cfvl40z2nzau_medium_2x.png";
import Liseys from "../../images/icons/promo_logo_liseys_story__gafh6yfbu36m_medium_2x.png";
import series6 from "../../image-1/logos/logo_hero__trsrpeu6koqy_large.png";
import Fittness from "../../image-1/logos/promo_logo_fitness_plus_ttw__fs5nb1mh7cyi_large.png";
import card from "../../image-1/logos/logo__dcojfwkzna2q_large (1).png";
import Section from "./Section";
// import Youtube from "../Youtube/Youtube";

function Main() {
  return (
    <div>
<Section
 wrapperClass="first-hightlight-wrapper"
 titelWrapperClass="title-wraper bold"
 titel= "iPhone 12"
 description=" Blast past fast."
 price="From $29.95/mo. or $699 with trade‑in."
 />

<Section
 wrapperClass="second-2-hightlight-wrapper"
 titelWrapperClass="title-wraper bold black"
 titel= "iPhone 12 Pro"
 description="It's a leap year."
 price="From $41.95/mo. or $999 with trade‑in."

 />

<Section
 wrapperClass="second-hightlight-wrapper"
 titelWrapperClass="title-wraper bold black"
 titel= "ipad Pro"
 description="Supercharged by the Apple M1 chip."

 />

      <section className="third-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="title-wraper">iPhone 12 Pro</div>
                <div className="description-wrapper white">
            It's a leap year.
          </div>
                <div className="description-wraper">
                  Buy directly from Apple with 
                  special carrier offers
                </div>
                <div className="price-wrapper">
                  From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
                </div>

                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Apply now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper">iMac</div>
                <div className="description-wraper">
                  Say hello.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Apply now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Forth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={series6} />
                  </div>
                </div>
                <div className="description-wraper white">
                  With the Always-On Retina display.
                  <br />
                  You’ve never seen a watch like this.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Buy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={Fittness} />
                  </div>
                </div>
                <div className="description-wraper">
                  With the Always-On Retina display.
                  <br />
                  You’ve never seen a watch like this.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Buy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      

      <section className="Fifth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
          <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={card} />
                  </div>
                </div>
                <div className="description-wraper">
                  With the Always-On Retina display.
                  <br />
                  You’ve never seen a watch like this.
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Buy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">

                <div className="tvshow-logo-wraper">
                <div className="tv-logo">
                <img src={appletv} />
                </div>
                  <img src={Liseys} />
                </div>

                <div className="watch-more-wrapper">
                  <a href="#">Watch now on the Apple TV App</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="youtubeVideosWrapper top-100">
        <Youtube />
      </section> */}
    </div>
  );
}

export default Main;
