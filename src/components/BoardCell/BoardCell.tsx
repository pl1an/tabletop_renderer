import React, { useState } from "react";
import "./BoardCell.css";

interface BoardCellProps {
    position:{x:number, y:number}
    playerTurn:number;
    handleClickedCell: (position:BoardCellProps["position"])=>void;
}
export const BoardCell = ({position, playerTurn, handleClickedCell}:BoardCellProps) => {
    const [clickedBy, setClickedBy] = useState<string>("");

    const handleClick = () => {
        if(clickedBy) return;
        setClickedBy("player"+playerTurn.toString());
        handleClickedCell(position);
    }

    return(
        <div>
            <div className={"cell" + (clickedBy? (" flip "+clickedBy) : "")} onClick={()=>handleClick()}></div>
        </div>
    )
}