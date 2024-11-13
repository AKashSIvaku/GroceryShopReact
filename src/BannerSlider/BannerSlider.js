import React from 'react';
import Slider from 'react-slick';
import './BannerSlider.css';

const BannerSlider = () => {
  const data = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      title: 'Fresh Vegetables & Fruits at your doorstep',
      description: 'We deliver fresh vegetables & fruits at your doorstep',
      button: 'https://www.google.com'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
      title: 'Fresh Vegetables & Fruits at your doorstep',
      description: 'Cherries and berries. Sweet peaches and nectarines. Summer baking season is here, and I couldn’t be more delighted.',
      button: 'https://www.google.com'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="bannerslider-container">
      <div className="sidebar">
        <h3>Shop by Category</h3>
        <ul>
          <li>Fruits & Vegetables</li>
          <li>Foodgrains, Oil & Masala</li>
          <li>Bakery, Cakes & Dairy</li>
          <li>Snacks & Branded Foods</li>
          <li>Cleaning & Household</li>
          <li>Eggs, Meat & Fish</li>
          <li>Beauty & Hygiene</li>
          <li>Beverages</li>
        </ul>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map(item => (
            <div className="imagecont" key={item.id}>
              <img src={item.image} alt="noimg" />
              <div className="content">
                <h1>{item.title}</h1>
                <span>{item.description}</span>
                <button onClick={() => window.location.href = item.button}>Shop More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;