import styled from 'styled-components';
import Slider from 'react-slick';

export const StyledSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    border-radius: 50%;
    padding: 0.6rem;
    opacity: 1;
    color: #ff9933;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    z-index: 20;
    background: #fff;
  }
  .slick-next {
    top: 50%;
    right: 5px;
  }
  .slick-prev {
    z-index: 40;
    left: 3px;
  }
  .slick-slide>div {
    margin: 0 20px;
  }
`;

export const TopRatedSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    border-radius: 50%;
    padding: 0.6rem;
    opacity: 1;
    color: #ff9933;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    z-index: 20;
    background: #fff;
  }
  .slick-next {
    top: 50%;
    right: 15px;
  }
  .slick-prev {
    z-index: 40;
    left: 0px;
  }
  .slick-slide>div, .slick-slide {
    height: 100%;
    display: flex;
  }
`;
