import { SideBarList } from "./SideBarList"
import vite from '/vite.svg'

export const SideBar = () => {
    return (  
        <aside className="sideBar__compress" >
            <div className="sideBar__title ">
                <img src={vite} alt="system icon" /><span className="hidden">SideBar</span>
            </div>            
            <SideBarList />                               
        </aside>              
        
    )
}