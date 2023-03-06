import React from 'react'
import styled from 'styled-components'

function Landing() {
  return (
    <>
        <Logo src="/assets/coding.png"/>
        <Contact type="button">Contact Me!</Contact>
    </>
  )
}

export default Landing

const Logo = styled.img`
  width: 30px;
`;
const Contact = styled.button``;