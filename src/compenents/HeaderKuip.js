

import React from 'react'
import { Container } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'



const HeaderKuip = () => {
  return (
    <Navbar className='logos' bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand  href="/">
          <img
            
            src="https://www.feyenoord.nl/Assets/images/logo.png?v=637846756880000000" alt="Feyenoord Logo" height="60"
            
            
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text >
            FeyenoordNews 
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HeaderKuip