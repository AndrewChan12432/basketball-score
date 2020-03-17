import React, {useState} from 'react'

export default function EnterTime(props) {
  const [time, setTime] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push('/enter-name-A')
    console.log(time)
  }
  return (
    <div className="enter-time d-flex justify-content-center align-items-center">
      <div className="text-center p-3">
        <form onSubmit={handleSubmit} className="text-center">
        <label>Please select minutes per quater:</label>
        <input type="number" required min="5" max="10" onChange={(e) => {
          setTime(e.target.value)
          console.log(time)}
          } />
        <input type="submit" value="Next" />
        </form>
      </div>
    </div>
  )
}

