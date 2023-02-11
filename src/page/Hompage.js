import React from 'react'
import { Link } from "react-router-dom";

const Hompage = () => {
  return (
    <div>
        <h1>Homepage</h1>
        <Link to="/about">go to about</Link>
    </div>
  )
}

export default Hompage