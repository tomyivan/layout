export const Input3 = ({ icon, type, id, placeholder, value, onChange, disabled=false }) => {
    return (
        <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-2 pointer-events-none w-20">
                {icon}
            </div>
            <input
                type={type}
                id={id}
                className={`block p-1 ps-10 text-gray-600 border border-gray-300 rounded w-full appearance-none focus:outline-none focus:ring-[1px] focus:ring-blue-300 ${disabled? 'cursor-not-allowed' : ''}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}/>
        </div>
    );
};