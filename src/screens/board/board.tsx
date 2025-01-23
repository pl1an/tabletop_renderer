import React, { useEffect, useState } from "react";
import "./board.css";
import { useLocation } from "react-router-dom";
import { BoardCell } from "../../components/BoardCell/BoardCell";

interface boardProps{
    height:number,
    widht:number,
}
export const Board = ()=>{
    const location = useLocation();
    const {height, widht}:boardProps = location.state || 0;
    const game_name = "Jogo da Velha";

    const [playerTurn, setPlayerTurn] = useState(1);
    const handleTurnChange = () => {
        setPlayerTurn(playerTurn==1? 2:1);
    }

    const [clickedCells, setClickedCells] = useState<boolean[][]>([]);
    const generateClickArray = () => {
        let newArray:boolean[][] = [];
        for(let x=0; x<widht; x++){
            newArray.push([]);
            for(let y=0; y<height; y++){
                newArray[x].push(false);
            }
        }
        setClickedCells(newArray);
    }
    const handleClickedCell = (position:{x:number, y:number}) => {
        let updatedCickArray:boolean[][] = [...clickedCells];
        updatedCickArray[position.x][position.y] = true;
        setClickedCells(updatedCickArray);
        handleTurnChange();
    }

    

    useEffect(()=>{
        generateClickArray();
    }, [widht, length])

    return(
        <div className="boardbody">
            <h1 className="gametitle">{game_name}</h1>
            <h3>turno do jogador {playerTurn}</h3>
            <ul className="board"> 
                {[...Array(widht).keys()].map((item, index1) => (
                    <ul>
                        {[...Array(height).keys()].map((item, index2)=>(
                            <li>    
                                <BoardCell position={{x:index1, y:index2}} playerTurn={playerTurn} handleClickedCell={handleClickedCell}></BoardCell>
                            </li>
                        ))}
                    </ul>
                ))}
            </ul>
        </div>
    )
}