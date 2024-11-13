import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import BannerSlider from '../../BannerSlider/BannerSlider'
import HomeCategories from '../../HomeCategories/HomeCategories'
import Products from '../../Products/CategorySidebar'
import Po from '../../Products/DupilcateSidebar1'
import Por from '../../Products/DuplicateSidebar2'




 
const Home = () => {
  return (
    <div>
       <Navbar />
      <BannerSlider />
        <HomeCategories/>
        <Products/>
        <Po/>  
        <Por/>
        </div>
  )
}
export default Home