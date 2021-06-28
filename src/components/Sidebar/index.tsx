import Link from "next/link";
import {
  CloseIcon,
  Icon,
  SidebarBtn,
  SidebarContainer,
  SidebarLink,
  SidebarWrapper,
  SidebarBtnLink,
  SidebarMenu,
} from "./styles";

interface ISidebarProps {
  sidebarIsOpen: boolean;
  toggleSidebarIsOpen: () => void;
}

export function Sidebar({ sidebarIsOpen, toggleSidebarIsOpen }: ISidebarProps) {
  return (
    <SidebarContainer isOpen={sidebarIsOpen}>
      <Icon onClick={toggleSidebarIsOpen}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggleSidebarIsOpen} to="about">
            About
          </SidebarLink>
          <SidebarLink onClick={toggleSidebarIsOpen} to="discover">
            Discover
          </SidebarLink>
          <SidebarLink onClick={toggleSidebarIsOpen} to="services">
            Services
          </SidebarLink>
          <SidebarLink onClick={toggleSidebarIsOpen} to="signup">
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtn>
          <Link href="/signin" passHref>
            <SidebarBtnLink>Sign In</SidebarBtnLink>
          </Link>
        </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
