import '../../assets/css/button.css';
import { useRef } from 'react';

export const Button = ({ children, variant }) => {
    const btn = useRef(null);
    const handleRippleEffect = (e) => {
        const button = btn.current;
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");
        button.appendChild(ripple);
        let x = e.clientX - button.getBoundingClientRect().left;
        let y = e.clientY - button.getBoundingClientRect().top;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        setTimeout(() => {
            ripple.remove();
        }, 600); 
    };
    const handleClick = (e) => {
        handleRippleEffect(e);
        if (onClick) {
            onClick(e);
        }
    };
    return (
        <>
            <button
                className={`btn ${variant}`}
                ref={btn}
                onClick={handleClick}
            >
                {children}
            </button>
        </>
    );
};
