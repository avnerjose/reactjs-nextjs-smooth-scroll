import { Button } from "../Button";
import { IDataProps } from "./Data";
import {
  BtnWrap,
  Heading,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TopLine,
  Column1,
  Column2,
  Img,
  ImgWrap,
} from "./styles";

interface IInfoSectionProps extends IDataProps {}

export function InfoSection({
  alt,
  buttonLabel,
  headLine,
  description,
  id,
  img,
  imgStart,
  lightText,
  topLine,
  lightBg,
  primary,
}: IInfoSectionProps) {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TopLine>{topLine}</TopLine>
            <Heading lightText={lightText}>{headLine}</Heading>
            <Subtitle lightText={lightText}>{description}</Subtitle>
            <BtnWrap>
              <Button
                to="home"
                primary={primary}
                smooth
                duration={500}
                spy={true}
                offset={-80}
                activeClass="active"
              >
                {buttonLabel}
              </Button>
            </BtnWrap>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} layout="fill" objectFit="contain" />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
}
