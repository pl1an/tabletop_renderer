import {DebugMenu} from "./screens/DebugMenu/DebugMenu";
import {Board} from "./screens/board/board";

export const Routes = ()=>{
    return([
        {
            path:'/',
            element: <DebugMenu></DebugMenu>
        },
        {
            path:"board",
            element: <Board></Board>
        }
    ])
}

export default Routes;