import React from 'react'

const Navbar = () => {
  return (
    <nav className=' text-white font-bold flex justify-between px-3 h-12 items-center'>
      
      <div className="logo font-bold text-lg flex gap-2 justify-center items-center">
        <span>
          Patreon Clone V2
          </span>
         <lord-icon
              src="https://cdn.lordicon.com/oyxqonng.json"
              trigger="loop"
              stroke="bold"
              state="loop-cycle"
              style={{ width:30, height:30 }}
            />
        </div>
      <ul className="flex justify-between gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul>
      
    </nav>
  )
}

export default Navbar
