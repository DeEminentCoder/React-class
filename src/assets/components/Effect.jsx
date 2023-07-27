import React, { useEffect, useState } from "react";



// import React from 'react'

const Effect = () => {
    useEffect(() => {
        console.log("Changing");
      }, [])

      const [first, setFirst] = useState(0)

      const change = () => {
        setFirst(first+1)
      }
    
  return (
    <>
    <div>{first}</div>
    <button onClick={change}>Change</button>
    </>
    
  )
}

export default Effect