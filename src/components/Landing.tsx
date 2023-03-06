import React from "react";
import styled from "styled-components";

function Landing() {
  return (
    <>
      <NavHolder>
        <Logo src="/assets/coding.png" />
        <Contact type="button">Contact Me!</Contact>
      </NavHolder>
    </>
  );
}

export default Landing;

const NavHolder = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 30px;
`;
const Contact = styled.button`
  font-family: 'Teko', sans-serif;

`;
