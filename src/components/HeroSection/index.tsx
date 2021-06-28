import { useState } from "react";
import { Button } from "../Button";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroSubtitle,
  HeroTitle,
  VideoBg,
} from "./styles";

export function HeroSection() {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted>
          <source
            src={require("../../public/videos/video.mp4")}
            type="video/mp4"
          />
        </VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroTitle>Virtual Banking Made Easy</HeroTitle>
        <HeroSubtitle>
          Sign up for a new account today and receive $250 in credit towards
          your next payment
        </HeroSubtitle>
        <HeroBtnWrapper>
          <Button
            to="signup"
            primary
            dark
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            smooth={true}
            spy={true}
            offset={-80}
            duration={500}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}
