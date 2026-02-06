import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive breakpoint detection
 * @param {string} query - Media query string (e.g., '(min-width: 768px)')
 * @returns {boolean} Whether the media query matches
 */
export function useMediaQuery(query) {
    const [matches, setMatches] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.matchMedia(query).matches;
        }
        return false;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        const handleChange = (event) => {
            setMatches(event.matches);
        };

        // Add listener
        mediaQuery.addEventListener('change', handleChange);

        // Set initial value
        setMatches(mediaQuery.matches);

        // Cleanup
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, [query]);

    return matches;
}

// Predefined breakpoint hooks
export function useIsMobile() {
    return !useMediaQuery('(min-width: 768px)');
}

export function useIsTablet() {
    return useMediaQuery('(min-width: 768px)') && !useMediaQuery('(min-width: 1024px)');
}

export function useIsDesktop() {
    return useMediaQuery('(min-width: 1024px)');
}

export default useMediaQuery;
