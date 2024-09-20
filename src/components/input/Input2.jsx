export const Input2 = ({ label, name, id, type, placeholder, focus, onChange, value, onBlur, defaultValue, step, disabled }) => {
    return (
        <div className="focus:border-gray-300 w-full">
            <label 
                htmlFor={ id }
                className="block text-gray-600 font-semibold"
            >{label}</label>
            <input 
                type={ type }
                name={ name }
                id={ id } 
                placeholder={ placeholder }
                autoFocus = { focus }
                onChange={ onChange }
                value={ value }
                step={ step  ? '0.01' : '' }
                defaultValue={ defaultValue }
                onBlur={onBlur}
                disabled={disabled}
                className={`appearance-none  mt-1 border-b-2 border-gray-300 p-1 w-full text-gray-600 focus:outline-none focus:border-black ${disabled ? 'cursor-not-allowed' : ''}`}
            />         
        </div>
    );
}
