import { Link } from "react-router-dom";
import "./MenuBanner.css";

interface MenuBannerProps{
    gameName:string;
    gameDescription:string;
    gameImage:string;
    boardSize:{x:number, y:number};
}

export const MenuBanner = ({gameName, gameDescription, gameImage, boardSize}:MenuBannerProps) => {
    return (
        <div className="menubannerbody">
            <div className="banner">
                <h2 className="gamename">{gameName}</h2>
                <div className="imagetextborder"></div>
                <img className="gameimage" src={gameImage}></img>
                <a className="gamedescription">{gameDescription}</a>
            </div>
            <Link to={"/board"} state={{widht:boardSize.x, height:boardSize.y, gameName:gameName}}>
                <button className="playbutton">
                    <h2 className="buttontext">{"JOGAR"}</h2>
                </button>
            </Link>
        </div>
    )
}