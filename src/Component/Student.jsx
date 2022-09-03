import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { store } from './Details';
import 'bootstrap/dist/css/bootstrap.min.css';


const Student = () => {

  const [student] = useContext(store);

  return (
    <div className='student__details' >
      <h1 style={{ display: 'inline-block' }}>
        Students Details
      </h1>
      <Link to="/add-student"><section className="add__student st">
        Add Student
      </section></Link>
     
      <br /><br /><br /><br />

      <table className="table table-bordered ">
        
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Course</th>
            <th scope="col"> Batch </th>
            <th scope="col"> Change</th>
          </tr>
        </thead>
        <tbody>
          {student.map((student) => (<tr key={student.id}>

            <td>{student.Name}</td>
            <td>{student.Age}</td>
            <td>{student.Course}</td>
            <td>{student.Batch}</td>
            <td><Link style={{textDecoration: 'none'}} to="/add-student">Edit</Link></td>

          </tr>


          ))}


        </tbody>
      </table>
    </div>
  )
}

export default Student