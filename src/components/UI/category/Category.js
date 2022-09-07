import React from "react";
import { Container, Row, Col } from "reactstrap";
import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";
import '../../../styles/category.css';

const Category = () => {
  const categoryData = [
    {
      display: "Ethio Foods",
      imgUrl: categoryImg01,
    },
    {
      display: "Ethio Foods",
      imgUrl: categoryImg02,
    },
    {
      display: "Ethio Foods",
      imgUrl: categoryImg03,
    },
    {
      display: "Ethio Foods",
      imgUrl: categoryImg04,
    },
  ];
  return (
    <Container>
      <Row>
        {
          categoryData.map((cat, index) => (
            <Col lg='3' md='4' key={index}>
              <div className="category__item d-flex align-items-center gap-3">
                <div className="category__img">
                  <img src={cat.imgUrl} alt="img-url" />
                </div>
                <h6>{cat.display}</h6>
              </div>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

export default Category;
