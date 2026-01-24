import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white flex justify-center px-3 h-12 items-center'>
        <p className="text-center"> © {new Date().getFullYear()} Patreon Clone V2 — Fund your projects</p>
    </footer>
  )
}

export default Footer
