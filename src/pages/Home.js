import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category";
import '../styles/home.css';

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy Way to make an order</h5>
                <h1 className="mb-3 hero__title">
                  <span>HUNGRY?</span>Just wait <br /> food at
                  <span> your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, enim vel corrupti eos accusamus consequatur placeat
                  beatae, eaque deserunt dolores hic nisi possimus perferendis
                  esse laborum. Quia culpa possimus natus!
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order-btn d-flex align-items-center just">
                    Order Now<i class="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="foods">See All Foods</Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>
                    No Shipping Charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-fill"></i>
                    </span>
                    100% Secure Checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0 mt-5">
        <Category />
      </section>
      <section className="mt-5 mb-5">
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h5 className="feature__subtitle">What we Serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">We will <span>take care </span></h2>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
