import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, 
    Layout,
    Input,
    Buttons
} from "../pages";
export const router = createBrowserRouter([ 
        {
            path: "/",  
            element: <Layout />,
            errorElement: <ErrorPage />,            
            children:[
                {
                    path: "components/",
                    children: [
                        {
                            path: "input/",
                            element: <Input />
                        },
                        {
                            path: "button/",
                            element: <Buttons />
                        }
                    ],
                }
            ]
        }
    ],
    {
        basename: "/template/"
    }
);
