import { Input1, Input2, Input3, Input4, Input5 } from "../../components"
import { Header } from "../../modules"
const navigation = [
    {
        label: "Home",
        path: "/"
    },
    {
        label: "Input",
        path: "/components/input/"
    }
]
export const Input = () => {
    return (
        <>
            <Header 
                title={"INPUT"}
                navigation={navigation}
            />
            <div className="p-6">
                <div className="flex flex-row gap-4">
                    <div className="w-1/3">
                        <Input1 
                            type="text" 
                            id="name" 
                            label="INPUT 1" 
                            name="name"
                            placeholder={"Enter your data"}
                            
                        />
                    </div>
                    <div className="w-1/3">
                        <Input1 
                            type="text" 
                            id="name" 
                            label="INPUT 1" 
                            name="name"
                            placeholder={"Enter your data"}
                            disabled={true} 
                        />
                    </div>
                    <div className="w-1/3">
                        <Input2 
                            label="INPUT 2" 
                            name="name" 
                            id="name" 
                            type="text" 
                            placeholder="Enter your data"
                            
                        />
                    </div>
                    <div className="w-1/3">
                        <Input2 
                            label="INPUT 2" 
                            name="name" 
                            id="name" 
                            type="text" 
                            placeholder="Enter your data"
                            disabled={true}
                        />
                    </div>
                </div>
                <div className="flex flex-row gap-4 items-center mt-4">
                    <div className="w-1/2">
                        <Input3
                            type="search"
                            id="name"
                            placeholder="Search data (input3)..."                            
                            onChange={() => {}}
                            icon={"🔎"}
                        />
                    </div>
                    <div className="w-1/2">
                    <Input3
                            type="search"
                            id="name"
                            placeholder="Search data (input3)..."                            
                            disabled={true}
                            icon={"🔎"}
                        />
                    </div>
                   
              
                </div>
                <div className="flex flex-row gap-4 items-center mt-4">
                    <div className="w-1/2">                        
                        <Input4 
                            label="INPUT 4" 
                            id="select" 
                            dataList={[
                                {id: 1, name: "Apple"},
                                {id: 2, name: "Banana"},
                                {id: 3, name: "Cherry"},
                                {id: 4, name: "Date"},
                                {id: 5, name: "Elderberry"},
                                {id: 6, name: "Fig"},
                                {id: 7, name: "Grape"},
                                {id: 8, name: "Honeydew"},
                                {id: 9, name: "Kiwi"},
                                {id: 10, name: "Lemon"}
                            ]} 
                            name="select" 
                            placeholder="Search ..."
                        />
                    </div>
                    <div className="w-1/2">
                            <Input5 
                                id="file"                               
                                onChange={() => {}} 
                                icon={"📂"}
                            />
                    </div>
                </div>
            </div>    
            
        </>
    )
}