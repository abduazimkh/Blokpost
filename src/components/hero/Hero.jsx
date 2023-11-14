import React from 'react';
import "./Hero.scss";
import hero from "../../assets/images/hero.svg";
import { Button, Container } from "../../utils";

const Hero = () => {
  return (
    <div className='hero'>
        <Container>
          <div className='hero__wrapper'>
            <div className="hero__content">
              <h2>Stay curious.</h2>
              <p>Discover stories, thinking, and expertise from writers on any topic.</p>
              <Button type={"large"} text="Start Reading" />
            </div>
            <div className='hero__image'>
              <img src={hero} alt="" />
            </div>
          </div>
        </Container>
    </div>
  )
}

export default Hero