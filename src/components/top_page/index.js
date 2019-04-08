import React, { Component } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import './top_page.css';

export default class TopPage extends Component {
    render() {
        return (
            <div>
                <Navbar className='top_bar'>
                    <Navbar.Brand >Simple viewer of Vega</Navbar.Brand>
                </Navbar>
                <Container>
                    <Row>
                        <Col>
                            <div className='welcome'>
                                Simple viewer of Vega like bl.ocks.org
                            </div>
                            <div className='explanation'>
                                <p>
                                    This is simple viewer for sharing code written in Vega.js hosted on GitHub Gist. <br />
                                    This is prototype of the platform for sharing Vega.js which is task in Google Summer of Code.<br />
                                    System is similar to bl.ocks.org <br />
                                    For example, if your Gist URL is
                                </p>
                                <p>
                                    <a href='https://gist.github.com/takedakun/2651e3789d2cbd6ecbd963bf19216eec'>https://gist.github.com/takedakun/2651e3789d2cbd6ecbd963bf19216eec</a>
                                </p>
                                <p>
                                    replace 'https://gist.github.com/' to 'http://localhost:3000' (It is assumed that the front end server has been started.)
                                </p>
                                <p>
                                    <a href='http://localhost:3000/takedakun/2651e3789d2cbd6ecbd963bf19216eec'>http://localhost:3000/takedakun/2651e3789d2cbd6ecbd963bf19216eec</a>
                                </p>
                                <p>
                                    If you want to watch works of a user, access this.
                                </p>
                                <p>
                                    <a href='http://localhost:3000/takedakun/'>http://localhost:3000/takedakun/</a>
                                </p>
                                <p>
                                    You only have to upload Vega.js code named 'index.vega.json' to Gist. This file is used to visualize your Vega code. <br />
                                    In addition to that,  if you upload 'READEME.md' file, it is diplayed under the vislualization.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}