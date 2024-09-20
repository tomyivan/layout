import { useEffect, useState, useRef } from "react";
export const Input4 = ({ id, label, name, dataList, defaultValue, setValue = () => {}, placeholder }) => {   
    const [data, setData] = useState(dataList);
    const [show, setShow] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const containerRef = useRef(null);  
    useEffect(() => {                           
        if (defaultValue) {                 
            const defaultItem = dataList?.find(item => {               
                return  item.name?.toLowerCase() === defaultValue.toLowerCase()});       
            if (defaultItem) {
                document.getElementById(id).value = defaultItem.name;
            } else {
                document.getElementById(id).value = '';
            }
        } else {
            document.getElementById(id).value = '';
        }
    }, [dataList, defaultValue]);

    const handleFocus = () => {
        setShow(true);
        setData(dataList);
        setHighlightedIndex(-1);
    };

    const handleBlur = (e) => {
        setTimeout(() => {
            if (containerRef.current && !containerRef.current.contains(e.relatedTarget)) {
                setShow(false);
            }
        }, 100);
    };

    const handleSelect = (textIn, idValue) => { 
        setValue(idValue);
        document.getElementById(id).value = textIn;     
        setShow(false);          
    };

    const handleFilter = (e) => {
        const filteredData = dataList.filter(item => item.name?.toLowerCase().includes(e.target.value.toLowerCase()));       
        setData(filteredData);
        setHighlightedIndex(-1);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setHighlightedIndex(prevIndex => Math.min(prevIndex + 1, data.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setHighlightedIndex(prevIndex => Math.max(prevIndex - 1, 0));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (highlightedIndex >= 0 && highlightedIndex < data.length) {
                handleSelect(data[highlightedIndex].name, data[highlightedIndex].id);
            }
        }
    };

    return (
        <div ref={containerRef} className="w-full">
            <label 
                htmlFor={id} 
                className="text-gray-600 font-semibold"
            >
                {label}
            </label>
            <div className='relative'>
                <input 
                    type="text"
                    name={name}
                    id={id}
                    autoComplete="off"
                    onChange={handleFilter}
                    onFocus={handleFocus}
                    onBlur={handleBlur} 
                    onKeyDown={handleKeyDown}
                    className="appearance-none border-b-2 mt-1 pt-1 border-gray-300 w-full text-gray-700 focus:outline-none focus:border-black"
                    aria-autocomplete="list"
                    aria-controls={`${id}-list`}
                    aria-expanded={show}
                    role="combobox"
                    placeholder={placeholder}
                />
                {show && (
                        <div className={`absolute left-0 mt-1 w-full bg-white border max-h-[300px] overflow-auto border-gray-300 z-10`}>
                            <ul id={`${id}-list`} role="listbox">
                                {data?.map((item, index) => (
                                    <li 
                                        key={item.id}
                                        className={`hover:bg-gray-400 hover:cursor-pointer p-0.5 ${highlightedIndex === index ? 'bg-gray-300' : ''}`}
                                        onMouseDown={() => handleSelect(item.name, item.id)}
                                        role="option"                               
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    );
};