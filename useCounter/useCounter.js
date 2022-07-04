import { useState } from "react";



export const useCounterr = (initialValue=10) => {

    const [counterr, setCounterr] = useState(initialValue);

    const increment = (value) => {
        setCounterr(counterr + value);
    }

    const decrement = (value) => {
        if(counterr === 1) return;

        setCounterr(counterr - value);
    }
    
    const reset = () => {
        setCounterr(initialValue);
    }

    return {
        counterr,
        increment,
        decrement,
        reset,
        setCounterr,
    }
}