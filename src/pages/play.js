import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import GameItem from "../components/gameItem";
import GameList from "../components/gameList";
import games from "../data/game.json";

function Play(){
    const { id } = useParams();
    const [ selectedGame, setSelectedGame ] = useState("");
    useEffect(() => {
        setSelectedGame(games.data.filter((a) => a.id == id)[0]);
    }, [games]);

    if(id <= 3){
        return (
            (selectedGame && (
                <GameList key={ selectedGame.id} items={ selectedGame.game_board } id={selectedGame.id}/>
            ))
        );
    }
    else{
        return (
            <div>
                No Game Found ! Stop hacking me...
            </div>
        );
    }
}

export default Play;