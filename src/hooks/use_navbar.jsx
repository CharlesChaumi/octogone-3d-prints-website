/** 
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone . 
 * Toute reproduction, utilisation ou diffusion, partielle ou totale, 
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Node Modules
 */
import React, { useState, useContext, createContext} from 'react'

const NavBarContext = createContext(null);

export function NavBarContextProvider(props)  { 
    const [current, setCurrent] = useState(null);

    return (<NavBarContext.Provider value={{current, setCurrent}}>
        { props.children }
    </NavBarContext.Provider>);
 } 

export function useNavbar() {
    const context = useContext(NavBarContext);
    if (context === null) {
        throw new Error("Context must be used within a context provider");
    }
    return context;
}





export default useNavbar;