import { useRef } from "react"
export const Input5 = ({icon, id, value, onChange, disabled}) => {
    const inputRef = useRef(null);

    return (
        <div className="relative w-full ">
            <div 
                className=" bg-red-500 p-2 cursor-pointer absolute rounded-full top-1/2 transform -translate-y-1/2 left-0 rtl:left-auto rtl:right-0"
                onClick={() => inputRef.current.click()}
            >
                {icon}
            </div>
            <input
                type='file'
                id={id}
                className={` p-1 ps-10 text-gray-600 border border-gray-300 rounded w-full appearance-none focus:outline-none focus:ring-[1px] focus:ring-blue-300  ${disabled? 'cursor-not-allowed' : ''} `}              
                value={value}
                onChange={onChange}
                disabled={disabled}
                hidden={true}
                ref={inputRef}
                
            />
        </div>
    )
}