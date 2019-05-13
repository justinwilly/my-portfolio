import React from "react";
import styled from "styled-components";
import BGTexture from "../images/ep_naturalblack.png";

export default function AboutMe() {
  return (
    <AboutMeStripe style={{ backgroundImage: `url(${BGTexture})` }}>
      <AboutMeInfo>
        <h2>About Me</h2>
        <hr />
        <AboutMeWrapper>
          <AboutMeText>
            <p>
              <span>Hi, everyone!</span> <br /> <br /> My name is Thomas
              Hessburg, and I'm a full stack software developer from Orlando,
              Florida. I love to create, and I'm excited to learn and grow in
              the tech field. <br />
              <br />
              After spending the past several years working as a
              welder/fabricator all around the country, as well as working for
              myself as an audio engineer writing and mixing music for
              bands/music groups, I've decided to take on a new challenge in
              learning to create software. I began my journey in mid-2018 by
              picking up some books/courses on JavaScript and spending 12 hour
              days trying to learn EVERYTHING that I possibly could. Come early
              2019, I began attending Lambda School, an online, fully immersive,
              30+ week dev bootcamp. I can proudly say that after over half a
              year and over 1,000 hours, I'm ready to make my move into the
              workforce. I would love to bring my talents to your company!
            </p>
          </AboutMeText>

          <AboutMeDecals>
            <i className="fab fa-css3-alt" />
            <i class="fab fa-html5" />
            <i class="fab fa-js" />
            <hr />
            <i class="fab fa-react" />
            <i class="fab fa-node-js" />
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
  padding-bottom: 200px;
  width: 100vw;
  background: black;
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 75%);
  color: white;
  @media (max-width: 900px) {
    clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
    padding: 100px 10px;
  }
`;

const AboutMeInfo = styled.div`
  marign: auto;
  width: 100%;
  min-height: 300px;
  max-width: 1800px;
  padding: 15px;

  h2 {
    font-family: "Cormorant Unicase", serif;
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
  height: 400px;
  background: white;
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 25px;
  }

  i {
    font-size: 80px;
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
