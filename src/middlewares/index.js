import { SET_POKEMONS } from "../actions/types";

export const logger = (store) => (next) => (action) => {
    next(action);
};

// export const featuring = (store) => (next) => (action) => {
//     const featured = [ {name: 'eddie'}, ...action.action.payload];
//     const updatedAction = {...action, action: {...action.action, payload: featured}}
//     next(updatedAction);
// };

export const enumerated = (store) => (next) => (action) => {
    if (action.type === SET_POKEMONS) {
        const list = [ ...action.payload];    
        const listUpdated = [];
        let count = 0;    
        list.forEach( (pokemon) => listUpdated.push({...pokemon, number: "#" + (++count).toString().padStart(3,'0') }));
        const updatedAction = {...action, action: {...action.action, payload: listUpdated}}
        next(updatedAction);
    } else {
        next(action);
    }
};
