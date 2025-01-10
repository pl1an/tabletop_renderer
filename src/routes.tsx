import {Menu} from "./screens/menu/menu";
import {Board} from "./screens/board/board";

export const Routes = ()=>{
    return([
        {
            path:'/',
            element: <Menu></Menu>
        },
        {
            path:"board",
            element: <Board></Board>
        }
    ])
}

export default Routes;