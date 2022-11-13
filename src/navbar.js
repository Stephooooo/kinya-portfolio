import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='border-b-4 py-4 px-10 ' >

    <div className='flex space-x-24 text-semibold text-[20px] '>
     <Link className='hover:font-bold' to= '/' > Home </Link> 
     <Link className='hover:font-bold' to='/Aboutme'> About me</Link>

    </div>
    </div>
   
  )
}

export default Navbar