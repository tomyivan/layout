
import { useEffect } from "react"
import { NavBar } from "../../modules/navBar/NavBar"
import { SideBar } from "../../modules/sideBar/SideBar"
import { Outlet } from "react-router-dom"
export const Layout =  () =>  {
  const handleShowSideBar = () => {      
    const sideBar = document.querySelector("aside")
    const sideBarTitle = document.querySelector(".sideBar__title>span")    
    const sideBarItems = document.querySelectorAll(".sideBar__item>span")
    const sideBarGroupItems = document.querySelectorAll(".sideBar__item__group>span")
    if(sideBar.classList.contains("sideBar__compress"))
    {
      sideBar.classList.remove("sideBar__compress")
      sideBar.classList.add("sideBar")
    }
    else{
      sideBar.classList.remove("sideBar")
      sideBar.classList.add("sideBar__compress")
    }
    sideBarTitle.classList.toggle("hidden")
    sideBarGroupItems?.forEach(item => item.classList.toggle("hidden"))
    sideBarItems?.forEach(item => item.classList.toggle("hidden"))    
  }
  console.log(window.innerWidth)
  useEffect(() => {
    const sideBar = document.querySelector("aside")
    const sideBarTitle = document.querySelector(".sideBar__title>span")    
    const sideBarItems = document.querySelectorAll(".sideBar__item>span")
    const sideBarGroupItems = document.querySelectorAll(".sideBar__item__group>span")
    const handleResize = () => {
      if(window.innerWidth < 768){
        sideBar.classList.remove("sideBar")
        sideBar.classList.add("sideBar__compress")
        sideBarTitle.classList.add("hidden")
        sideBarGroupItems?.forEach(item => item.classList.add("hidden"))
        sideBarItems?.forEach(item => item.classList.add("hidden"))
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  return (
    <div className="layout">
      <div className="main__layout">
          <SideBar />
          <div className="w-full h-screen overflow-auto">
            <NavBar handleShowSideBar={handleShowSideBar}/>            
              <div className="content">                
                <Outlet />
              </div>            
          </div>
          
      </div>
    </div>
  )
}

export default Layout
