import React from "react";
import { Link } from "react-router-dom";

export default function EnterNameA() {
  return (
    <div className="enter-name-A d-flex justify-content-center align-items-center">
      <div className="text-center">
      <h2>Please enter team A's name and player's number:</h2>
      <div className="container-1">
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
            <Link to="enter-name-B">
                <p>Next</p>
            </Link>
          </div>
      </div>
      </div>
    </div>
  )
}
