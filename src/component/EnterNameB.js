import React from 'react'

export default function EnterNameB(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push('/scoreboard')
      }
    return (
        <div className="enter-name-B d-flex justify-content-center align-items-center">
            <div className="text-center p-3">
                <h2>Please enter team A's name and player's number:</h2>
                <form onSubmit={handleSubmit} className="text-center" >
                    <h1>
                        Team B:<input type="text" name="teamA" />
                    </h1>
                    <p>
                        Player 1:<input type="text" name="player" />
                    </p>
                    <p>
                        Player 2:<input type="text" name="player" />               
                    </p>
                    <p>
                        Player 3:<input type="text" name="player" />             
                    </p>
                    <p>
                        Player 4:<input type="text" name="player" />         
                    </p>
                    <p>
                        Player 5:<input type="text" name="player" />             
                    </p> 
                    <input type="submit" value="Next" />
                </form>
            </div>
        </div>
    )
}
