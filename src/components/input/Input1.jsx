
export const Input1 = ({type,id, label, name, required = false, placeholder, disabled=false }) => {
    return (
        <>
            <label 
                className="font-semibold text-gray-600 "
            htmlFor={id}>
                {label}
            </label>
            <input 
                type={type} 
                id={id} 
                name={name}
                className = {`text-gray-600 mt-1 border border-gray-200 rounded p-1 focus:outline-none focus:ring-[1px] focus:ring-blue-300 w-full ${disabled ? 'cursor-not-allowed' : ''}`}
                autoComplete="off"
                disabled={disabled}
                required={required}
                placeholder={placeholder}
            />
        </>
    )   
}