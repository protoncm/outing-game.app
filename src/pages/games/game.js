import React from "react";
import { NavLink } from "react-router-dom";
import "./game.css";
function Game(){
    return (
        <div>
            <h1>Game List</h1>
            <ul class="navigation">
               <li>
                <NavLink
                    to="/play/1"
                >
                    Word & Draw
                </NavLink>
              </li> 
              <li>
                <NavLink
                    to="/play/2"
                >
                    Word Memory
                </NavLink>
              </li> 
              <li>
                <NavLink
                    to="/play/3"
                >
                    Bingo
                </NavLink>
              </li> 
            </ul>
        </div>
    );
}

export default Game;