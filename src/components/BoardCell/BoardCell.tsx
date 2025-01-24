import React, { useState } from "react";
import "./BoardCell.css";

interface BoardCellProps {
    position:{x:number, y:number};
    clickedBy:string;
    handleClickedCell: (position:BoardCellProps["position"])=>void;
}
export const BoardCell = ({position, clickedBy,  handleClickedCell}:BoardCellProps) => {

    return(
        <div>
            <div className={"cell" + (clickedBy? (" flip "+clickedBy) : "")} onClick={()=>handleClickedCell(position)}></div>
        </div>
    )
}