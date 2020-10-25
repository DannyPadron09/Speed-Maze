import React from 'react'
import { Link } from "react-router-dom"


  function NavBar() {

    return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Back to Game</Link>
                    </li>
                    <li>
                        <Link to="/scoreform">Enter HighScore</Link>
                    </li>
                    <li>
                        <Link to="/highscores">HighScores</Link>
                    </li>
                </ul>
            </div>
    )}

    export default NavBar