import React, { useState } from "react";
import styled from "styled-components";
import BGTexture from "../images/ep_naturalblack.png";
import styles from "./HoverFx.module.scss";

import { useInView } from "react-intersection-observer";

export default function AboutMe() {
  const [css, setCss] = useState(false);
  const [html, setHtml] = useState(false);
  const [js, setJs] = useState(false);
  const [react, setReact] = useState(false);
  const [node, setNode] = useState(false);
  const [uiDesign, setUiDesign] = useState(false);
  const [adobe, setAdobe] = useState(false);
  const [git, setGit] = useState(false);

  //ref for page position
  const [ref, inView] = useInView({
    threshold: 0
  });
  const [textRef, texInView] = useInView({
    threshold: 0
  });

  return (
    <AboutMeStripe style={{ backgroundImage: `url(${BGTexture})` }}>
      <AboutMeInfo>
        <h2
          className={inView ? styles.fadeInText : styles.fadeOutText}
          ref={ref}
        >
          About Me
        </h2>
        <hr />
        <Slogan className={inView ? styles.fadeInText : styles.fadeOutText}>
          "...If someone offers you an amazing opportunity and you're not sure you can do it, say yes - then learn how to do it later...” <br />- Richard Branson
        </Slogan>
        <AboutMeWrapper>
          <AboutMeText>
            <p
              ref={textRef}
              className={texInView ? styles.fadeInText : styles.fadeOutText}
              style={{ fontWeight: 400 }}
            >
              <span>Hi, everyone!</span> <br /> <br /> My name is Justin Williams and I'm a full stack software developer from St. Augustine,
              Florida. I love to create and I'm excited to learn and grow in the
              tech field. <br />
              <br />
              Over the past several years I have worked as a freelance web developer for a local business.  This opportunity to build a website presented it self as I graduated
              with my bachelors degree and I decided "How hard could it be?" so I said "Yes".  Little did I know at that time I had just changed
              the path of my life.  
              <br />
              <br />
              I began my journey in early 2017 with Wordpress learning how to build a basic website through online tutorials.  
              As the rabbit hole presents it self to any future developer I quickly got sucked in.  Running into things I wish I knew how to customize or 
              how to do fully on my own.  That next year I received the opportunity to attend the first part of Udacity Grow with Google.
              After finishing the 3-month program I felt lost and did not know where to go to keep learning.
              <br />
              <br /> In the fall of 2019 I began attending Lambda School (an online, fully immersive, 30+ week full stack computer science course).
              I can proudly say that after a year and
              1,000 hours of study, I'm ready to make my move into the
              workforce. I would love to discuss how my talents may fit with
              your company!
            </p>
          </AboutMeText>

          <AboutMeDecals>
            <h3>Technologies</h3>
            <TechnologyEven style={{ position: "relative" }}>
              <i className="fab fa-css3-alt" />
              <h4>CSS</h4>
              <PopOver
                className={css ? styles.popoverHover : styles.popoverHoverOut}
                onMouseEnter={e => {
                  setCss(true);
                }}
                onMouseLeave={e => {
                  setCss(false);
                }}
              >
                <p>Experienced in CSS, SASS, LESS</p>
              </PopOver>
            </TechnologyEven>
            <TechnologyOdd style={{ position: "relative" }}>
              <i className="fab fa-html5" />
              <h4>HTML</h4>
              <PopOver
                className={html ? styles.popoverHover : styles.popoverHoverOut}
                onMouseEnter={e => {
                  setHtml(true);
                }}
                onMouseLeave={e => {
                  setHtml(false);
                }}
              >
                <p>Practiced in semantic HTML and JSX</p>
              </PopOver>
            </TechnologyOdd>
            <TechnologyEven style={{ position: "relative" }}>
              <i className="fab fa-js" />
              <h4>JavaScript</h4>
              <PopOver
                className={js ? styles.popoverHover : styles.popoverHoverOut}
                onMouseEnter={e => {
                  setJs(true);
                }}
                onMouseLeave={e => {
                  setJs(false);
                }}
              >
                <p>Writing clean, ES6 syntax JavaScript is a strength</p>
              </PopOver>
            </TechnologyEven>
            <TechnologyOdd style={{ position: "relative" }}>
              <i className="fab fa-react" />
              <h4>React JS</h4>
              <PopOver
                className={react ? styles.popoverHover : styles.popoverHoverOut}
                onMouseEnter={e => {
                  setReact(true);
                }}
                onMouseLeave={e => {
                  setReact(false);
                }}
              >
                <p>Excellent at modern React/Redux (incuding hooks)</p>
              </PopOver>
            </TechnologyOdd>
            <TechnologyEven style={{ position: "relative" }}>
              <i className="fab fa-node-js" />
              <h4>Node JS </h4>
              <PopOver
                className={node ? styles.popoverHover : styles.popoverHoverOut}
                onMouseEnter={e => {
                  setNode(true);
                }}
                onMouseLeave={e => {
                  setNode(false);
                }}
              >
                <p>Node/Express backend development is a favorite</p>
              </PopOver>
            </TechnologyEven>
            <TechnologyOdd style={{ position: "relative" }}>
              <i className="fas fa-drafting-compass" />
              <h4>UI Design</h4>
              <PopOver
                className={
                  uiDesign ? styles.popoverHover : styles.popoverHoverOut
                }
                onMouseEnter={e => {
                  setUiDesign(true);
                }}
                onMouseLeave={e => {
                  setUiDesign(false);
                }}
              >
                <p>Building clean UI's is a passion of mine</p>
              </PopOver>
            </TechnologyOdd>

            <TechnologyEven style={{ position: "relative" }}>
              <i className="fab fa-python" />
              <h4>Python</h4>
              <PopOver
                className={adobe ? styles.popoverHover : styles.popoverHoverOut}
                onMouseEnter={e => {
                  setAdobe(true);
                }}
                onMouseLeave={e => {
                  setAdobe(false);
                }}
              >
                <p>Writing clean python3 and building data structures, algorithms and code challenges </p>
              </PopOver>
            </TechnologyEven>
            
            <TechnologyOdd style={{ position: "relative" }}>
              <i className="fab fa-github" />
              <h4>Git</h4>
              <PopOver
                className={git ? styles.popoverHover : styles.popoverHoverOut}
                onMouseEnter={e => {
                  setGit(true);
                }}
                onMouseLeave={e => {
                  setGit(false);
                }}
              >
                <p>
                  Solid git habbits are very important in my day to day
                  development
                </p>
              </PopOver>
            </TechnologyOdd>
          </AboutMeDecals>
        </AboutMeWrapper>
      </AboutMeInfo>
    </AboutMeStripe>
  );
}

const AboutMeStripe = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 100px 40px;
  padding-bottom: 100px;
  width: 100vw;
  background: #343434;
  clip-path: polygon(0 0, 100% 8%, 100% 100%, 0 100%);
  color: white;
  @media (max-width: 900px) {
    clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
    padding: 100px 10px;
  }
`;

const AboutMeInfo = styled.div`
  /* marign: auto; */
  width: 100%;
  min-height: 300px;
  max-width: 1800px;
  padding: 15px;
  font-family: "Montserrat", sans-serif;
  h2 {
    font-size: 60px;
    margin: 10px;
    font-weight: 100;

    @media (max-width: 900px) {
      font-size: 48px;
    }
  }
`;

const AboutMeText = styled.div`
  text-align: start;
  padding: 10px;
  width: 45%;
  font-size: 20px;
  span {
    font-weight: 800;
    font-size: 24px;
    @media (max-width: 900px) {
      font-size: 20px;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    border-right: 0px solid rgba(0, 0, 0, 0);
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    font-size: 16px;
  }
`;

const AboutMeDecals = styled.div`
  padding: 10px;
  width: 55%;
  color: black;
  background: white;
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 25px;
  }
  i {
    font-size: 75px;
    @media (max-width: 650px) {
      font-size: 50px;
    }
  }
  h3 {
    font-size: 25px;
    font-weight: 400;
    @media (max-width: 650px) {
      font-size: 20px;
    }
  }
`;

const AboutMeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const TechnologyEven = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* magin: 10px auto; */
  background: rgba(0, 0, 0, 0.03);
  padding: 5px 80px;
  font-weight: 400;
  @media (max-width: 650px) {
    padding: 5px 40px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h4 {
    font-size: 20px;
    margin: 0;
    color: #e8374f;
  }
`;
const TechnologyOdd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* magin: 10px auto; */
  background: rgba(0, 0, 0, 0.09);
  padding: 5px 80px;
  font-weight: 400;
  @media (max-width: 650px) {
    padding: 5px 40px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h4 {
    font-size: 20px;
    margin: 0;
    color: #e8374f;
  }
`;

const PopOver = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  opacity: 0;
  cursor: default;
  p {
    cursor: default;
  }
`;

const Slogan = styled.p`
  font-size: 17px;
  font-weight: 400;
  font-style: italic;
  margin: 10px auto 20px;
  width: 90%;
  max-width: 700px;
  font-family: "Montserrat", sans-serif;
  @media (max-width: 900px) {
    font-size: 14px;
    margin-bottom: 0;
  }
`;
