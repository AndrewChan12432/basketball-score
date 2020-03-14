import React from 'react'
import { Link } from 'react-router-dom'

export default function EnterTime() {
  return (
    <div className="enter-time d-flex justify-content-center align-items-center">
      <div className="text-center">
        <p>Please select minutes per quater</p>
        <Link to="/enter-name-A">
          <span>Next</span>      
        </Link>
      </div>
    </div>
  )
}

