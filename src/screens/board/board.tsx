import React, { useEffect, useState } from "react";
import "./board.css";
import { useLocation } from "react-router-dom";

interface boardprops{
    height:number,
    widht:number,
    players:number
}
export const Board = ()=>{
    const location = useLocation();
    const {height, widht, players}:boardprops = location.state || 0;
    const game_name = "Jogo da Velha";

    const [player_turn, setPlayerTurn] = useState(1);

    return(
        <div className="boardbody">
            <h1>{game_name}</h1>
            <h3>turno do jogador {player_turn}</h3>
            <ul style={{display:"flex", flexDirection:"row"}}>
                {[...Array(widht).keys()].map((item, index) => (
                    <ul>
                        {[...Array(height).keys()].map((item, index)=>(
                            <li>    
                                <a>{index}</a>
                            </li>
                        ))}
                    </ul>
                ))}
            </ul>
        </div>
    )
}