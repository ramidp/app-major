import { useState, } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';


const zeldaphoto1 = require('./images/wall1.jpg');
const zeldaphoto2 = require('./images/wall2.jpg');
const zeldaphoto3 = require('./images/wall3.jpg');

const CarouselMain1 = () => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="container">
      <div className="row">
        <div className="col">
          <div>
            <h2>Images Gallery Example</h2>
          </div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={zeldaphoto1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={zeldaphoto2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={zeldaphoto3}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
      </div>
    </Container>
  );
}

export default CarouselMain1

const Container = styled.div`
  .carousel {
    margin: 35px 0;
    border-radius: 20px;
    .carousel-inner {
      border-radius: 20px;
    }
    .carousel-item {
    img {
      filter: grayscale(100%)
    }
  }
  }
  h2 {
    margin-top: 10px;
    font-size: 20px;
    color: ${props => props.theme.fontPrim}
  }
`