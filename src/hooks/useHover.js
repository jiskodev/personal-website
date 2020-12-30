import {useState, useCallback, useRef} from 'react'

export default function useHover() {
    const [value, setValue] = useState(false);

    const handleMouseEnter = useCallback(() => setValue(true), []);
    const handleMouseLeave = useCallback(() => setValue(false), []);

    const ref = useRef();
    
    const callbackRef = useCallback(
        (node) => {
        if (ref.current) {
            ref.current.removeEventListener("mouseenter", handleMouseEnter);
            ref.current.removeEventListener("mouseleave", handleMouseLeave);
        }
    
        ref.current = node;
    
        if (ref.current) {
            ref.current.addEventListener("mouseenter", handleMouseEnter);
            ref.current.addEventListener("mouseleave", handleMouseLeave);
        }
        },
        [handleMouseEnter, handleMouseLeave]
    );

    return [callbackRef, value];
}