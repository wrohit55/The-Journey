import './About.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
const About = () => {
  

    const[Students,setStudents] = useState([])
    const fetchStudents = async()=>{
  
      const response = await axios.get("https://65a0f676600f49256fb0978c.mockapi.io/Students")
      setStudents(response.data)
    }
  
  
  useEffect(()=>{
  fetchStudents()
  },[])
  console.log(Students)

  return (<>
  <div className="about-section">{
    Students.map((student)=>{return(
      <div className="idCard">
      <div className="header">
        <h2>Identity Card</h2>
      </div>
      {/* <div className="photo"></div> */}
      <div className="info">
        <div className="photo"><img src={student.studentName} alt="" /></div>
        <p><label>Name:</label>{student.studentName}</p>
        <p><label>ID Number:</label>{student.idNumber}</p>
        <p><label>Date of Birth:</label> {student.dob}</p>
        <p><label>Address:</label>{student.address}</p>
      </div>
    </div>
    )
  })
}
</div>
  </>
    
   

  )
}

export default About