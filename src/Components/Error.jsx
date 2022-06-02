import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Error = () => {

    const {error} = useContext(AuthContext);
  return (
    <div style={{fontSize: "30px" , fontWeight: "bold" , marginTop: "30px"}}>
        {error}
    </div>
  )
}

export default Error