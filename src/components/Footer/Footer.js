import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/yaycommerceNobg.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "../../styles/footer.css";
import { Link } from 'react-router-dom';

import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <p>
                Lorem Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
                ipsum dolor sit amet ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h4>Delivery Time</h4>
            <ListGroup className="delivery__time__list">
              <ListGroupItem className="delivery__time__item border-0 ps-0">
                <span>MonDay - Friday</span>
                <p>3:00Am - 12:00Pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time__item border-0 ps-0">
                <span>Saturday - Sunday</span>
                <p>Day Off</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h4>Contact</h4>
            <ListGroup className="delivery__time__list">
              <ListGroupItem className="delivery__time__item border-0 ps-0">
                <span>
                  Location: <small>Bole City Plaza Building</small>
                </span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time__item border-0 ps-0">
                <span>
                  Phone: <small>+251960702372</small>
                </span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time__item border-0 ps-0">
                <span>
                  Email: <small>yayner2002@gmail.com</small>
                </span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h4>NewsLetter</h4>
            <p>Subscribe to our Newsletter</p>
            <div className="newsletter">
              <input type="text" placeholder="Your Email..." />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6"><p className="copyright">Coyright - 2022, Made with love by GeezTech Systems. All rights Reserved</p></Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-5 justify-content-end">
              <p className="m-0">Follow: </p>
              <span><Link to><i class="ri-facebook-line"></i></Link></span>
              <span><Link to="https://github.com/yayner2002"><i class="ri-github-fill"></i></Link></span>
              <span><Link to="https://www.linkedin.com/in/yaynshet-medhin/"><i class="ri-linkedin-fill"></i></Link></span>
              <span><Link to="https://www.linkedin.com/in/yaynshet-medhin/"><i class="ri-youtube-fill"></i></Link></span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
