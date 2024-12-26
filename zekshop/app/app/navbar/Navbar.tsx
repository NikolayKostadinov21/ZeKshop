import React, { useState } from "react";
import styled from "styled-components";
import { connect_wallet } from "./connect_wallet";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1f1f1f;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
  border-radius: 20px;
  margin-right: auto;
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none; /* Hide the nav buttons for small screens */
  }
`;

const NavButton = styled.button`
  background: #1f1f1f;
  border: 2px solid #4a90e2;
  padding: 0.5rem 1.2rem;
  font-size: 20px;
  color: #914ab5;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4a90e2;
    color: #ffffff;
  }
`;

const Sidebar = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background-color: #2c2c2c;
  color: #ffffff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 1100;
`;

const SidebarCloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
`;

const SidebarLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  padding: 0.5rem 0;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    color: #4a90e2;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
  z-index: 1000;
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <NavbarContainer>
        <Logo src="/zekshop_logo_black_background.png" alt="al" />
        <NavButtons>
          <NavButton>Store</NavButton>
          <NavButton onClick={connect_wallet}>Connect Wallet</NavButton>
          <NavButton>About</NavButton>
        </NavButtons>
        <HamburgerButton onClick={toggleMenu}>☰</HamburgerButton>
      </NavbarContainer>
      <Overlay isOpen={isOpen} onClick={closeMenu} />
      <Sidebar isOpen={isOpen}>
        <SidebarCloseButton onClick={closeMenu}>✖</SidebarCloseButton>
        <SidebarLink href="#">Home</SidebarLink>
        <SidebarLink href="#">Store</SidebarLink>
        <SidebarLink href="#">Connect Wallet</SidebarLink>
        <SidebarLink href="#">About</SidebarLink>
      </Sidebar>
    </>
  );
};

export default Navbar;
