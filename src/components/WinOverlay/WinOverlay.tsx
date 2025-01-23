import { Link } from "react-router-dom";
import "./WinOverlay.css";

interface WinOverlayProps{
    winnerplayer:string;
    wintype:string;
    className?:string;
}

export const WinOverlay = ({winnerplayer, wintype, className}:WinOverlayProps) => {
    const handleRetryRequest = () => {
        window.location.reload();
    }

    return (
        <div className={"winoverlaybody "+className}>
            <button className="retrybutton" onClick={()=>handleRetryRequest()}>
                <h1 className="retrytext">{"Jogar novamente >"}</h1>
            </button>
            <Link to={"/"}>
                <button className="menubutton">
                    <h1 className="menutext">{"< Ir para o menu"}</h1>
                </button>
            </Link>
            <h2>{wintype==="tie"? "Empate!" : ("Parabéns! Jogador " + winnerplayer + " venceu!")}</h2>
        </div>
    )
}