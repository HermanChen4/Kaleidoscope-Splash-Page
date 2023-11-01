import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function TypedText() {
    const el = useRef(null);
    // "text-indigo-700 subheader1"
    useEffect(() => {
        const options = {
            strings: [ 
                'Quickly track data flow, identify bottlenecks, and annotate dependency graphs for easier debugging'
            ],
            typeSpeed: 50,
            backSpeed: 15,
            backDelay: 1000,
            startDelay: 500,
            loop: true,
        };

        const typed = new Typed(el.current, options);

        return () => {
            typed.destroy();
        };
    }, []);
    return <span ref={el}></span>;
}

export default TypedText;