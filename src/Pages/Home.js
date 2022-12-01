import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import ItemCard from '../components/ItemCard/ItemCard'
import NavBar from '../components/Navbar/NavBar'

const Home = () => {
  return (
    <div>
            <NavBar/>
            <CarouselItem/>
            <ItemCard/>
    </div>
  )
}

export default Home
