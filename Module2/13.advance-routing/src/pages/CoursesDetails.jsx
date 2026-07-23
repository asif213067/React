// import React from 'react'

import { useParams } from "react-router-dom"


const CoursesDetails = () => {

    const params = useParams();
    // console.log(params.courseId);
    

  return (
    <div>
        {/* <h1>{params.courseId.charAt(0).toUpperCase()+params.courseId.slice(1)} Course Details Page</h1> */}
        <h1>{params.courseId} Course Details Page</h1>
    </div>
  )
}

export default CoursesDetails