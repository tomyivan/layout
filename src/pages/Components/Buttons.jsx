import { Button } from "../../components"
import { Header } from "../../modules"
const navigation = [
    {
        label: "Home",
        path: "/"
    },
    {
        label: "Buttons",
        path: "/components/button/"
    }
]
export const Buttons = () => {
    return (
        <>
            <Header 
                title={"BUTTONS"}
                navigation={navigation}
            />
            <div className="p-6">
                <div className="flex flex-row gap-4">
                    <div className="w-1/3">
                        <Button 
                            variant={"btn-primary"}
                        >
                            btn-primary
                        </Button>
                    </div>
                    <div className="w-1/3">
                        <Button 
                            variant={"btn-secondary"}
                        >
                            btn-secondary
                        </Button>
                    </div>
                    <div className="w-1/3">
                        <Button 
                            variant={"btn-danger"}
                        >
                            btn-danger
                        </Button>    
                    </div>                    

                    <div className="w-1/3">
                        <Button 
                            variant={"btn-success"}
                        >
                            btn-success
                        </Button>  
                    </div>
                    <div className="w-1/3">
                        <Button 
                            variant={"btn-info"}
                        >
                          btn-info
                        </Button>  
                    </div>
                </div>
                <div className="flex flex-row gap-4 mt-4">
                    <div className="w-1/3">
                        <Button 
                            variant={"btn-outline-primary"}
                        >
                            btn-primary
                        </Button>
                    </div>
                    <div className="w-1/3">
                        <Button 
                            variant={"btn-secondary"}
                        >
                            btn-secondary
                        </Button>
                    </div>
                    <div className="w-1/3">
                        <Button 
                            variant={"btn-danger"}
                        >
                            btn-danger
                        </Button>    
                    </div>                    

                    <div className="w-1/3">
                        <Button 
                            variant={"btn-success"}
                        >
                            btn-success
                        </Button>  
                    </div>
                    <div className="w-1/3">
                        <Button 
                            variant={"btn-info"}
                        >
                          btn-info
                        </Button>  
                    </div>
                </div>
            </div>
        </>
    )   
}