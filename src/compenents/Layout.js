import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "./Layout.css";

import Sidebar from "./Sidebar"

const Layout = ({children}) => {
  return (
    <Container fluid="xl" className="mainContainer">
        <Row className="mainRow">
            <Col className="sideNavbar" xs={2} md={2} lg={2} xl={2}>
                <Sidebar />
            </Col>
            <Col className="mainFrame" xs={10} md={10} lg={10} xl={10}>
                { children }
            </Col>
        </Row>
    </Container>
  )
}

export default Layout