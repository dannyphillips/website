import React from 'react'
import styled from 'styled-components'
import construction from '../assets/under_construction.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 200px auto;
`;

const Maintenance = () => {
  return (
    <Container>
    <img src={construction} alt="under construction" />
    </Container>
  )
}

export default Maintenance
