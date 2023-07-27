import React from "react";
import { SecondaryButton } from "../../components/SecondaryButton";
import { Frame } from "../../components/Frame";
import { Frame48226 } from "../../components/Frame48226";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="macbook-pro-wrapper">
        <div className="macbook-pro">
          <div className="whoweare">
            <h1 className="text-wrapper">Who we are?</h1>
            <p className="text-wrapper-para">
              MIESS is a society representing the students of mechanical and
              industrial engineering department of IIT Roorkee. It is a vibrant
              community of passionate students dedicated to promoting excellence
              and fostering a supportive environment within the field of
              mechanical and industrial engineering. It is the main driving
              force behind a number of enriching and interesting programs and
              events for the welfare of students and hence aiding in discovering
              their passion by keeping them in touch with latest development in
              the field of mechanical and production engineering.
            </p>
            <div className="buttondiv">
              <SecondaryButton
                buttonClassName="design-component-instance-node"
                className="secondary-button-instance"
                property1="default"
                text="MEET THE TEAM"
              />
            </div>
          </div>
          <div className="imgdiv">
            <img
              className="image"
              alt="Image"
              src="https://generation-sessions.s3.amazonaws.com/162451095108fd8bfa57276c16179052/img/image-10.png"
            />
          </div>
        </div>
        <div className="macbook-pro whatwedo">
          <div className="whatwedo">
            <h1 className="text-wrapper">What we do?</h1>
            <p className="text-wrapper-para">
              {" "}
              As an inclusive society, we strive to bring together students from
              diverse backgrounds and academic levels to share knowledge, engage
              in collaborative projects, and cultivate a sense of camaraderie.
              Our aim is to enhance the overall educational experience of our
              members by organizing a wide range of events, workshops,
              industrial visits, and technical competitions. Through these
              initiatives, we aim to develop leadership skills, encourage
              innovation, and nurture a lifelong passion for mechanical and
              industrial engineering. The group aims to be a common platform for
              all the needs of MIED students and continue to reach newer heights
              by the constant support.
            </p>
          </div>
        </div>
        <div className="macbook-pro ourevents">
          <div className="ourevents">
            <h1 className="text-wrapper">Our Events</h1>
          </div>
        </div>
        <div className="macbook-pro">
          <div className="macbook-pro oureventsimg">
            <div className="rectangle">
              <img
                className="img"
                alt="Frame"
                src="https://generation-sessions.s3.amazonaws.com/81e2d3a4146c700a1759314c5c924a83/img/frame-4-1-2@2x.png"
              />
            </div>
            <div className="rectangle">
              <img
                className="img"
                alt="Image"
                src="https://generation-sessions.s3.amazonaws.com/f0a872ef58daa9b1c09705faffa61a9f/img/image-9@2x.png"
              />
            </div>
            <div className="rectangle">
              <img
                className="img"
                alt="Frame"
                src="https://generation-sessions.s3.amazonaws.com/81e2d3a4146c700a1759314c5c924a83/img/frame-4-1-2@2x.png"
              />
            </div>
            <div className="rectangle">
              <img
                className="img"
                alt="Frame"
                src="https://generation-sessions.s3.amazonaws.com/81e2d3a4146c700a1759314c5c924a83/img/frame-4-1-2@2x.png"
              />
            </div>
            <div className="rectangle">
              <img
                className="img"
                alt="Image"
                src="https://generation-sessions.s3.amazonaws.com/f0a872ef58daa9b1c09705faffa61a9f/img/image-9@2x.png"
              />
            </div>
            <div className="rectangle">
              <img
                className="img"
                alt="Frame"
                src="https://generation-sessions.s3.amazonaws.com/81e2d3a4146c700a1759314c5c924a83/img/frame-4-1-2@2x.png"
              />
            </div>
          </div>
          <SecondaryButton
            className="secondary-button-instance-viewall"
            property1="default"
            text="View all"
          />
        </div>
        <div className="macbook-pro our-team">
          <h1 className="text-wrapper our-executive">Our Executive Heads</h1>
        </div>
        <div className="macbook-pro our-team">
          <div className="our-team-item">
            <Frame48226 className="frame-instance" property1="default" />
            <div className="dhaval-mendapara">
              <span className="span">
                Dhaval Mendapara
                <br />
              </span>
              <span className="text-wrapper-2">Vice-Chairperson</span>
            </div>
          </div>
          <div className="our-team-item">
            <PropertyDefaultWrapper
              className="frame-48225"
              property1="default"
            />
            <div className="dhaval-mendapara">
              <span className="span">
                Dhaval Mendapara
                <br />
              </span>
              <span className="text-wrapper-2">Vice-Chairperson</span>
            </div>
          </div>
          <div className="our-team-item">
            <Frame className="frame-48224" property1="default" />
            <div className="dhaval-mendapara">
              <span className="span">
                Dhaval Mendapara
                <br />
              </span>
              <span className="text-wrapper-2">Vice-Chairperson</span>
            </div>
          </div>
        </div>
        <div className="macbook-pro gallery">
          <div className="text-wrapper">Gallery</div>
        </div>
      </div>
    </div>
  );
};
