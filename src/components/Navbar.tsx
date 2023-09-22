import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth' // to update profile automatically
import { signOut } from 'firebase/auth'

export const Navbar = () => {

  const [user] = useAuthState(auth)

  const signUserOut = async () => {
    await signOut(auth)
  }

  // const [isActive, setIsActive] = useState(false)
    
   const handleClick = (event) => {
    event.currentTarget.classList.toggle('active');
   }

  return (
    <header className='navHeader'>
      <img src="./src/assets/Logo.png" alt="logo" className='logo' />
      <section className='menuContainer' onClick={handleClick}>
        <div className='menu'>
          <nav>
            <Link to="/">Home</Link>
            {!user ? <Link to="/login">Login</Link> : <Link to="/createpost">Create post</Link>}
          </nav>
          <div className="account flex gap-2 items-center">
            {/* <p>{auth.currentUser?.displayName}</p> */}{/*static, no update*/}
            {/* <img src={auth.currentUser?.photoURL || "src/assets/admin.png"} alt="user" className='dp'/> */}
            {user && (
              <>
                <img src={user?.photoURL || "src/assets/admin.png"} alt='user' className='dp'/>
                <p className='text-lg'>{user?.displayName}</p> {/*dynamic, constant update*/}
                <button className="btn" onClick={signUserOut}>Logout</button>
              </>
            )}
          </div>
        </div>
        <div className="hamburger" onClick={handleClick}>
          <div className="bar"></div>
        </div>
      </section>
    </header>
  )
}