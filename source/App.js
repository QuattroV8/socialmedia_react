import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'

import Navbar from './components/navbar.component'
import Register from './components/register.component'
import Login from './components/login.component'
import About from './components/about.component'
import Home from './components/home.component'



const InvalidRoute = () => {

      return (
        <div>
            <h1 style={{textAlign:'center'}}>Ruta Invalida ! Eroare 404 !</h1>
        </div>
      )
}


const App = () => {
    
    // Render App 

    return(
       <>
       {/*Render Navbar*/}
         <Navbar/> 
  
           {/*Define Routes*/}
               <Routes>
                  <Route path='/' element={<Navigate to='/home'/>} />
                  <Route path='/home' element={<Home/>}/>
                  <Route path='/register' element={<Register/>} />
                  <Route path='/login' element={<Login/>} />
                  <Route path='/about' element={<About/>}/>

                  {/*Invalid Routes*/}

                  <Route path='*' element={<InvalidRoute/>}/>

               </Routes>
        </>
        
        )

}

export default App