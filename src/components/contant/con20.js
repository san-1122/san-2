import React from 'react'
import png1 from '../image/20.png'
import { Link } from "react-router-dom";
function Con20() {
  return (
    <>
    <div><img src={png1}/></div>
    <Link to='/'>Back</Link>
    </>
  )
}

export default Con20