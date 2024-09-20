import { Link } from "react-router-dom"
export const  Header = ({title,navigation}) => {
    console.log(navigation)
    return (
        <header className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="font-bold text-4xl text-gray-600">
                {title}
            </h1>   
            <ul className="flex gap-2 font-semibold">
                {
                    navigation?.map((item,index) =>    
                        <li key={index}>
                            {
                                navigation?.length - 1 === index ?                                   
                                    (
                                        <span className="text-gray-600">
                                            {item.label}
                                        </span>
                                    ):
                                    (   <Link                                   
                                            to={item.path}
                                            className="text-blue-500 hover:text-blue-600">
                                            {item.label}/
                                        </Link> 
                                    )
                            }                              
                        </li>           
                    )
                }                            
            </ul>         
        </header>
    )
}