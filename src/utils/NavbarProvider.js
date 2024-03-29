import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const NavbarProvider = ({children}) => {
    const location = useLocation();

    const [showNavbar,setShowNavbar] =useState(false)

    useEffect(()=>{
        if(location.pathname === '/navbar-slider'){
            setShowNavbar(false)
        }else if(location.pathname === '/navbar-slider2'){
          setShowNavbar(false)
        }else if(location.pathname === '/men'){
          setShowNavbar(false)
        }else if(location.pathname === '/women'){
          setShowNavbar(false)
        }
     else if(location.pathname === '/checkout'){
          setShowNavbar(false)
     
        }else if(location.pathname === '/billing'){
        setShowNavbar(false)
        // }else if(location.pathname === ''){
        //  setShowNavbar(false)
        // }else if(location.pathname === ''){
        //   setShowNavbar(false)
        // }else if(location.pathname === ''){
        //   setShowNavbar(false)
       }else{
           setShowNavbar(true)
            
     }
    },[])
    
  return (
    <div>{showNavbar && children}</div>
  )
}

export default NavbarProvider;
