import { FaHome, FaAmazon, FaAndroid, FaAngellist } from "react-icons/fa"
import { HiClipboardDocumentList } from "react-icons/hi2";
import { Link } from "react-router-dom";
export const SideBarList = () => {
    return (       
            <ul className="sideBar__content">
                <li className="sideBar__item">                                        
                    <FaHome size={20}/>                    
                    <span className="hidden">
                        Home
                    </span>
                </li>
                <li className="sideBar__item">
                    <FaAmazon size={20}/>
                    <span className="hidden">
                        INPUT
                    </span>
                </li>
                <li className="sideBar__item">
                    <FaAndroid size={20}/>
                    <span className="hidden">
                        SALIR
                    </span>
                </li>                
                <li className="sideBar__item">                   
                    <FaAngellist size={20}/>
                    <span className="hidden">
                        Home
                    </span>                        
                </li>             
                <li className="sideBar__item__group group">                    
                    <HiClipboardDocumentList size={20} />
                    <span className="hidden">
                        COMPONENTS
                    </span>         
                    <div className="sideBar__item__group__option">
                        <Link to={`./components/input`} className="sideBar__item">Input</Link>
                        <Link to={`./components/button`} className="sideBar__item">Button</Link>                
                    </div>                    
                </li>
            </ul>            
    
    )
}