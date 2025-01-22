/** 
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone . 
 * Toute reproduction, utilisation ou diffusion, partielle ou totale, 
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Node Modules
 */
import { useState, useEffect } from "react";

function useOnScreen(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const observer =  new IntersectionObserver(([entry]) => {
                setIsIntersecting(entry.isIntersecting)
            }, { threshold: [0.6, 1]});

    useEffect(() => {
        if(ref.current)
            observer.observe(ref.current)
        return () => observer.disconnect();
    }, [ref]);

    return isIntersecting;
}

export default useOnScreen;