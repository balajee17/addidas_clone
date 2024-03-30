import React, { useEffect } from 'react'
import Homeheader from '../../content/Home/Herosection'
import { useDispatch } from 'react-redux'
import { getUser } from '../../redux/slices/auth'
import Cookies from 'js-cookie';


const Home = () => {
  const dispatch = useDispatch()

  const fetchUser = async()=>{
try {  
      const res = await dispatch(getUser())
      console.log(res)
      if(!res){
  
      }
} catch (error) {
  
}
  }
  useEffect(()=>{
    let token = Cookies.get('authCookie')
    if(token!==undefined ){
      localStorage.setItem("accessToken",token)
    }
fetchUser()
  },[])
  return (
    <div>
   
<Homeheader/>
    </div>
  )
}

export default Home