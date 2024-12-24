import React from 'react'
import Banner from './Banner'
import TopSallers from './TopSallers'
import Recommend from './Recommend'
import News from './News'
import Footer from '../../components/Footer'

function Home() {
  return (
    <>
        <Banner/>
        <TopSallers/>
        <Recommend/>
        <News/>
    </>

  )
}

export default Home