import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './slider.css';

const SimpleSlider = () => {
  const courses = [
    {
      id: 1,
      url: 'https://www.edureka.co/blog/wp-content/uploads/2017/06/selenium.png',
      name: 'Selinium',
    },
    {
      id: 2,
      url: 'https://www.rlogical.com/wp-content/uploads/2021/08/rest-api-model.png',
      name: 'Rest',
    },
    {
      id: 3,
      url: 'https://www.filepicker.io/api/file/P8oARzn3QrCs98sDW1Cl',
      name: 'Core Java',
    },
  ];

  const renderSlides = () => {
    return courses.map(course => (
      <div className="slider_container">
        <div className="slider_img">
          <img className='img' src={course.url} alt={course.name} ></img>
        </div>
      </div>
    ));
  };

  return (
    <Slider dots={true} autoplay= {true} autoplaySpeed={1000}>{renderSlides()}</Slider>
  );
}

export default SimpleSlider;