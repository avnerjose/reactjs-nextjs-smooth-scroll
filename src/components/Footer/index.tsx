import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItem,
  FooterLinkItemTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./styles";

export function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkItemTitle>About us</FooterLinkItemTitle>
              <Link href="/signin" passHref>
                <FooterLink>How it works</FooterLink>
              </Link>
              <Link href="/signin" passHref>
                <FooterLink>Testimonials</FooterLink>
              </Link>
              <Link href="/signin" passHref>
                <FooterLink>Careers</FooterLink>
              </Link>
              <Link href="/signin" passHref>
                <FooterLink>Investors</FooterLink>
              </Link>
              <Link href="/signin" passHref>
                <FooterLink>Terms of service</FooterLink>
              </Link>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkItemTitle>Videos</FooterLinkItemTitle>
              <Link href="/signin" passHref>
                <FooterLink>Submit video</FooterLink>
              </Link>
              <Link href="/signin" passHref>
                <FooterLink>Ambassadors</FooterLink>
              </Link>
              <Link href="/signin" passHref>
                <FooterLink>Agency</FooterLink>
              </Link>
              <Link href="/signin" passHref>
                <FooterLink>Influencer</FooterLink>
              </Link>
            </FooterLinkItem>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkItemTitle>Contact Us</FooterLinkItemTitle>
              <Link href="/signin" passHref>
                <FooterLink>Contact</FooterLink>
              </Link>
              <Link href="/signin" passHref>
                <FooterLink>Support</FooterLink>
              </Link>
              <Link href="/signin" passHref>
                <FooterLink>Destinations</FooterLink>
              </Link>
              <Link href="/signin" passHref>
                <FooterLink>Sponsorships</FooterLink>
              </Link>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkItemTitle>Social Media</FooterLinkItemTitle>
              <Link href="/signin" passHref>
                <FooterLink>Instagram</FooterLink>
              </Link>
              <Link href="/signin" passHref>
                <FooterLink>Facebook</FooterLink>
              </Link>
              <Link href="/signin" passHref>
                <FooterLink>Youtube</FooterLink>
              </Link>
              <Link href="/signin" passHref>
                <FooterLink>Twitter</FooterLink>
              </Link>
            </FooterLinkItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={scrollToTop}>dolla</SocialLogo>
            <WebsiteRights>
              dolla © {new Date().getFullYear()}
              All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <Link href="/" passHref>
                <SocialIconLink target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
              </Link>
              <Link href="/" passHref>
                <SocialIconLink target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
              </Link>
              <Link href="/" passHref>
                <SocialIconLink target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
              </Link>
              <Link href="/" passHref>
                <SocialIconLink target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
              </Link>
              <Link href="/" passHref>
                <SocialIconLink target="_blank" aria-label="LinkedIn">
                  <FaLinkedin />
                </SocialIconLink>
              </Link>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}
