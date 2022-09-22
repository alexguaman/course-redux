export const logger = (store) => (next) => (action) => {
    next(action);
};

export const enumerated = (store) => (next) => (action) => {
    if (action.type === "data/setPokemons") {
        const list = [ ...action.payload];
        const listUpdated = [];
        let count = 0;
        list.forEach( (pokemon) => listUpdated.push({...pokemon, number: "#" + (++count).toString().padStart(3,'0') }));
        const updatedAction = {...action, payload: listUpdated}
        next(updatedAction);
    } else {
        next(action);
    }
};
