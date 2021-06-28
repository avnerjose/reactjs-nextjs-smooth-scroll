import { FaBars } from "react-icons/fa";
import {
  Container,
  MobileIcon,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from "./styles";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

interface INavbarProps {
  toggleSidebarIsOpen: () => void;
}

export function Navbar({ toggleSidebarIsOpen }: INavbarProps) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 90) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Container scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo onClick={scrollToTop}>dolla</NavLogo>

          <MobileIcon onClick={toggleSidebarIsOpen}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about" smooth duration={500} spy={true} offset={-80}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="discover"
                smooth
                duration={500}
                spy={true}
                offset={-80}
              >
                Discover
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="services"
                smooth
                duration={500}
                spy={true}
                offset={-80}
              >
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="signup"
                smooth
                duration={500}
                spy={true}
                offset={-80}
              >
                Sign Up
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <Link href="/signin" passHref>
              <NavBtnLink>Sign In</NavBtnLink>
            </Link>
          </NavBtn>
        </NavbarContainer>
      </Container>
    </IconContext.Provider>
  );
}
