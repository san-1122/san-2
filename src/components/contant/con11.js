import React from 'react'
import png1 from '../image/11.png'
import { Link } from "react-router-dom";
function Con11() {
  return (
    <>
    <div><img src={png1}/></div>
    <Link to='/'>Back</Link>
    </>
  )
}

export default Con11