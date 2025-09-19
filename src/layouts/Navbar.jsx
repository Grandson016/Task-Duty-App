import React from 'react'
import navlogo from '/Nav-logo.svg'
import { Link, useMatch } from 'react-router-dom'
import profileimage from '../assets/profile-img.svg'
import menuOpen from "../assets/menu-open.svg"
import NavLinks from '../components/NavLinks'


const Navbar = () => {
    const isTask = useMatch("/all-tasks")
    const isNew = useMatch("/new-task")
    return (
        <nav className="wrapper flex justify-between norder-b-1 border-b-[#B8B6B6]">
            {/* nav-logo */}
            <div className='flex items-center gap-2'>
                <Link to="/" className='flex items-center gap-2'>
                    <img src="/Nav-logo.svg" alt="nav-logo" className='w-[39px]' />
                    <span className='font-[600] text-[27px] text-[#2D0050]'>
                        {" "}
                        TaskDuty{" "}
                    </span>
                </Link>


            </div>
            {/* nav-Links */}
            <NavLinks isTask={isTask} isNew={isNew}/>
            
        </nav>
    )
}

export default Navbar