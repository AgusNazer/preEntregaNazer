import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className='navBar__Flex'>
        <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl a__shoos__text">Shoos!</a>
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img className='nike__celu' src='https://www.tradeinn.com/m/13812/138126109/nike-zapatillas-metcon-7.jpg' />
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                <li><a>Running</a></li>
                <li><a>Crossfit</a></li>
                <li><a>Basquet</a></li>
                <li><a>Tennis</a></li>
                <li><a>All-day</a></li>
            </ul>
            </div>
        </div>
        <div className="flex-none">
            <div className="dropdown dropdown-end">
            <CartWidget/>
        </div>
        
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src="https://img.freepik.com/foto-gratis/persona-smartphone_140725-7912.jpg?w=2000" />
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                <a className="justify-between">
                    Profile
                    <span className="badge">My profile</span>
                </a>
                </li>
                <li><a>Logout</a></li>
                <li><a></a></li>
            </ul>
            
            </div>
        </div>
        </div>
    </div>
    
    
    
  )
}

export default NavBar
