import React, { useEffect } from 'react'
import Homeheader from '../../content/Home/Herosection'
import { useDispatch } from 'react-redux'
import { getUser } from '../../redux/slices/auth'

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
fetchUser()
  },[])
  return (
    <div>
   
<Homeheader/>
    </div>
  )
}

export default Home