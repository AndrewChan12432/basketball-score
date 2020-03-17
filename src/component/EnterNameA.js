import React, { useState } from "react";

export default function EnterNameA(props) {
  const [nameA , setNameA] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push('/enter-name-B')
    console.log(nameA)
  }
  return (
    <div className="enter-name-A d-flex justify-content-center align-items-center">
      <div className="text-center label-3">
        <form onSubmit={handleSubmit}>
        <label>Please enter team A's name and player's number:</label>
            <label>
                Team A:<input type="text" name="teamA" onChange={(e) => setNameA(e.target.value)} />
            </label>
              <label>
                Player 1:<input type="text" name="player" onChange={(e) => setNameA(e.target.value)} />
              </label>
              <label>
                Player 2:<input type="text" name="player" onChange={(e) => setNameA(e.target.value)} />
              </label>
              <label>
                Player 3:<input type="text" name="player" onChange={(e) => setNameA(e.target.value)} />
              </label>
              <label>
                Player 4:<input type="text" name="player" onChange={(e) => setNameA(e.target.value)} />
              </label>
              <label>
                Player 5:<input type="text" name="player" onChange={(e) => setNameA(e.target.value)} />
              </label>
              <input type="submit" value="Next" />
        </form>
      </div>
      </div>
  )
}
