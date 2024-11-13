import React from 'react';
import './HomeCategories.css';

const HomeCategories = () => {
  return (
    <div className='homecategories'>
      <div className='container'>
        <img src="https://m.media-amazon.com/images/I/5136Y63Lq4L._SL500_.jpg" alt="Category 1" />
      </div>
      <div className='container'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xOn19hnabhcLjxLnm7y6cRf0xqw5cuZ76A&s" alt="Category 2" />
      </div>
      <div className='container'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ3TemxGlnA1vAZBh35E6hJknlojQ6c2rXpA&s" alt="Category 3" />
      </div>
      <div className='container'>
        <img src="https://i.pinimg.com/1200x/81/b1/42/81b142f9f6c1a5989b7fb755b87f7a74.jpg" alt="Category 4" />
      </div>
    </div>
  );
};

export default HomeCategories;
