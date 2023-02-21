import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

// Get & Setting Up Environment 
const containerToRender = document.getElementById('root')
const root = createRoot(containerToRender)

//  Render Main Component (App Component)
root.render(
     <React.StrictMode>
          <BrowserRouter>
          <App/> 
          </BrowserRouter>
        </React.StrictMode>
)