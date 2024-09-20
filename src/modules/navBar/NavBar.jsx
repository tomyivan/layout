import { GiHamburgerMenu } from "react-icons/gi";
export const NavBar = ({handleShowSideBar}) => {
    return (
        <div className="navBar">
            <div 
                className="navBar__item text-white hidden md:block"   
                onClick={handleShowSideBar}
            >
                <GiHamburgerMenu size={20}/>                
            </div>
            <ul className="navBar__content">
                <li className="navBar__item">Home</li>
                <li className="navBar__item">About</li>
                <li className="navBar__item">SALIR</li>
            </ul>            
        </div>
    )
}