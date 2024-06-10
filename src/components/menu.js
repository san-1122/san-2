import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Menu() {
  return (
    <div><div className='top-menu'style={{backgroundColor:'#EEB341',margin:'0',padding:'0',height:'40px'}}></div>
    <div className='top-menu'style={{backgroundColor:'#534D4D',color:'white',margin:'0'
    ,padding:'0',height:'70px',fontSize:'48px',display:'flex',textAlign:'left'
    ,alignItems:'center', color:'black'}}><div style={{marginLeft:'20px'}}><Link to={"/"} style={{color:'#ffff'}}> Home </Link></div></div>
    </div>
  )
}

export default Menu