import React from 'react'
import { Link } from 'react-router-dom'
import  '../style.css'

const Nav = () => {
  return (
    <div className='nav'>
      
         <Link to= "/home" > Home </Link>  
          <Link to= "/student" > Student </Link> 
        <Link to= "/contact" > Contact </Link>  

    </div>
  )
}

export default Nav