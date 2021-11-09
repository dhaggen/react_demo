import React, { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible:boolean) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const containerRef = useRef<HTMLDivElement>(null);
    const displayerRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event:any) => {
        let clickOutsideContainer = containerRef.current && !containerRef.current.contains(event.target);
        let clickOutsideDisplayer = displayerRef.current && !displayerRef.current.contains(event.target);
        if (clickOutsideContainer && clickOutsideDisplayer) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return { containerRef, displayerRef, isComponentVisible, setIsComponentVisible };
}