import React, { useEffect, useReducer } from "react";
import { Slider } from '../components'
import { TopProducts, ShopProducts } from '../container'

const Shop = () => {


  return (
    <>
    <Slider/>
    <TopProducts/>
    <ShopProducts/>
    </>
  )
}

export default Shop