import React from 'react'
import { Link } from 'react-router-dom'
import menuOpen from "../assets/menu-open.svg"
import profileimage from '../assets/profile-img.svg'
const NavLinks = ({isNew,isTask}) => {
  return (
    <>
    <main>
        <div className='hidden md:flex items-center gap-10'>
                <ul className='flex items-center gap-10 font-[500] text-[22px] text-[#292929]'>
                    {!isNew && <Link to="/new-task"> New Task</Link>}
                    {!isTask &&  <Link to="/all-tasks"> All Tasks</Link>}
                </ul>
                <div>
                    <img src={profileimage} alt="profile-img" />
                </div>
            </div>
            {/* dropdown */}
            <div className="dropdown dropdown-bottom dropdown-end md:hidden">
                <div tabIndex={0} role="button" className="btn rounded-lg bg-[#974FD0]">
                    <img src={menuOpen} alt="menu-open" />
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm font-[500] text-[22px] text-[#974FD0] border-[#974FD0] border-1">
                    <li>
                        <a><Link to="/new-task"> New Task</Link></a>
                    </li>
                    <li>
                        <a><Link to="/all-tasks"> All Tasks</Link></a>
                    </li>
                </ul>
            </div>
    </main>
    </>
  )
}

export default NavLinks