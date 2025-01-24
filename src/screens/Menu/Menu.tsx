import "./Menu.css";
import { MenuBanner } from "../../components/MenuBanner/MenuBanner"
import jogodavelhaImage from "../../assets/jogodavelha.jpg"
import connectfourImage from "../../assets/connectfour.jpg"
import reversiImage from "../../assets/reversi.jpg"
import lastGameImage from "../../assets/whoknows.jpg";

export const Menu = () => {
    return (
        <div className="menubody">
            <MenuBanner 
                gameName="Jogo da Velha"
                gameDescription='O jogo da velha é um jogo simples em um tabuleiro 3x3, 
                    onde dois jogadores alternam-se marcando as casas para formar uma linha de três. 
                    Originado na Antiguidade, com registros no Egito e Roma, 
                    permanece popular por sua simplicidade e desafio estratégico.'
                gameImage={jogodavelhaImage}
                boardSize={{x:3, y:3}}
            />
            <MenuBanner
                gameName="Ligue Quatro"
                gameDescription="Ligue Quatro é um jogo onde dois jogadores alternam colocando discos em uma grade de 6x7, 
                    tentando formar uma linha de quatro. Criado em 1974, é popular por sua simplicidade e estratégia."
                gameImage={connectfourImage}
                boardSize={{x:7, y:6}}
            />
            <MenuBanner
                gameName="Reversi"
                gameDescription="Reversi é um jogo de tabuleiro para dois jogadores, 
                    onde o objetivo é conquistar o maior número de peças do adversário, 
                    virando-as para a cor própria ao cercá-las com peças próprias. 
                    O jogo é jogado em um tabuleiro de 8x8, com peças de dois lados, preto e branco. 
                    Criado no século XIX por Lewis Waterman, 
                    foi popularizado com o nome Othello na década de 1970 e continua sendo um desafio estratégico até hoje."
                gameImage={reversiImage}
                boardSize={{x:8, y:8}}
            />
            <MenuBanner
                gameName="Jogo Extra"
                gameDescription="???????????????????????????????????????????????????????????????
                    ????????????????????????????????????????????????????????????????????????????
                    ????????????????????????????????????????????????????????????????????????????
                    ????????????????????????????????????????????????????????????????????????????"
                gameImage={lastGameImage}
                boardSize={{x:1, y:1}}
            />
        </div>
    )
}