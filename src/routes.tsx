import {DebugMenu} from "./screens/DebugMenu/DebugMenu";
import {Board} from "./screens/Board/Board";
import { Menu } from "./screens/Menu/Menu";

export const Routes = ()=>{
    return([
        {
            path:'/debugmenu',
            element: <DebugMenu></DebugMenu>
        },
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