import React, { use } from 'react'
import {Container ,Logo ,Logoutbtn} from '../index.js'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const authstatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/', active:true },
    { name: 'Login', path: '/login', active: !authstatus },
    { name: 'Signup', path: '/signup', active: !authstatus },
    { name: 'All Posts', path: '/all-posts', active: authstatus },
    { name: 'Add Posts', path: '/add-posts', active: authstatus }
  ]
  return (
      <header className='py-3 shadow bg-gray-500'>
        <Container>
          <nav className='flex'>
            <div className='mr-4'>
              <Link to='/'><Logo width='70px'/></Link>
            </div>
           <ul className='flex ml-auto'>
            {navItems.map((items)=>
              items.active ? (
                <li key={items.name}>
                  <button onClick={()=> navigate(items.path)}
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    >{items.name}</button>
                </li>
              ) : null
            )}
            {authstatus && (
              <li>
                <Logoutbtn/>
              </li>
            )}
           </ul>
          </nav>
        </Container>
      </header>
  )
}

export default Header
