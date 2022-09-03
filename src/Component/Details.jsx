import React, { createContext, useState } from 'react'

export const store = createContext()
const Details = (props) => {
    const [students, setStudents] = useState([
         
    ])
  return (
    <div>
        <store.Provider value={[students,setStudents]} >
             {props.children}
        </store.Provider>
    </div>
  )
}

export default Details