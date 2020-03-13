import React from "react";

function EnterName() {
  return (
    <div className="Page1">
      <h2>Please enter your teams' name and players' number:</h2>
      <div className="container-1">
          <div className="d-flex">
            <div>
            <h1>
                Team A:
            </h1>
              <p>
                Player 1:{" "}
          
              </p>
              <p>
                Player 2:{" "}
          
              </p>
              <p>
                Player 3:{" "}
          
              </p>
              <p>
                Player 4:{" "}
          
              </p>
              <p>
                Player 5:{" "}
          
              </p>
            </div>  
            <div>
            <h1>
                Team B:{" "}

              </h1>
              <p>
                Player 1:{" "}
          
              </p>
              <p>
                Player 2:{" "}
          
              </p>
              <p>
                Player 3:{" "}
          
              </p>
              <p>
                Player 4:{" "}
          
              </p>
              <p>
                Player 5:{" "}
          
              </p>
            </div>
          </div>
          <div className="SetTime">
            <p>Select time </p>
          </div>
      </div>
    </div>
  )
}
export default EnterName;
