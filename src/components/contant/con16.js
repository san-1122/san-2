import React from 'react'
import png1 from '../image/16.png'
import { Link } from "react-router-dom";
function Con16() {
  return (
    <>
    <div><img src={png1}/></div>
    <Link to='/'>Back</Link>
    </>
  )
}

export default Con16