import React from 'react'
import png1 from '../image/2.png'
import { Link } from "react-router-dom";

function Con2() {
  return (
    <>
    <div><img src={png1}/></div>
    <Link to='/'>Back</Link>
    </>
  )
}

export default Con2