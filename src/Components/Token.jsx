import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Token = () => {
    const {token} = useContext(AuthContext);
    return <h1 style={{fontSize: "50px", marginTop: "100px"}}> Token : {token.token} </h1>
}

export default Token;