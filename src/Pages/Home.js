import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import CustomCaro from '../components/Carousel/Carousel'
import ItemCard from '../components/ItemCard/ItemCard'
import NavBar from '../components/Navbar/NavBar'


const Home = () => {
  return (
    <div>
            <NavBar/>
            {/* <CustomCaro/> */}
            <ItemCard/>
    </div>
  )
}

export default Home
