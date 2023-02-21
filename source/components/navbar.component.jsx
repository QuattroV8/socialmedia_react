import React from 'react'

import {Link,useLocation} from 'react-router-dom'

import '../stylesheet/navbar.style.css'


const Navbar = () => {

    // Implement Active Links
    
    // Get Current 
    
      const isActiveComponent = (componentName) => {
           const getCurrentLocationPath = useLocation()
             const getCurrentComponentName = getCurrentLocationPath.pathname.split('/')[1] 

                return componentName === getCurrentComponentName ? 'active' : 'inactive'
      }
        


    // Render Navbar 

    return(
        <div className='navbar-container'>
            <h1 className='web-portal-title'>
               <Link to='/home'>Social Media</Link></h1>
            <ul className='web-portal-options'>
                <li className={isActiveComponent('register')}><Link to='/register'>Register</Link></li>
                <li className={isActiveComponent('login')}><Link to='/login'>Autentificare</Link></li>
                <li className={isActiveComponent('about')}><Link to='/about'>Despre</Link></li>
            </ul>    
        </div>)

}


export default Navbar