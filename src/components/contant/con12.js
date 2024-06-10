import React from 'react'
import png1 from '../image/12.png'
import { Link } from "react-router-dom";
function Con12() {
  return (
    <>
    <div><img src={png1}/></div>
    <Link to='/'>Back</Link>
    </>
  )
}

export default Con12