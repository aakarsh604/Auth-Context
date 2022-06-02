import React from 'react'
import Navbar from './Navbar'
import Body from "./Body"
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import Token from './Token'
import Error from "./Error"

const MyApp = () => {
  const {isAuthorized, token, error} = useContext(AuthContext);
  return (
    <div>
      <Navbar/>
      {isAuthorized && <Body/>}
      {token && <Token/>}
      {error && <Error/>}
    </div>
  )
}

export default MyApp