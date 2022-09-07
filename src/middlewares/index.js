export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
};

// export const featuring = (store) => (next) => (action) => {
//     const featured = [ {name: 'eddie'}, ...action.action.payload];
//     const updatedAction = {...action, action: {...action.action, payload: featured}}
//     next(updatedAction);
// };

export const enumerated = (store) => (next) => (action) => {
    const list = [ ...action.payload];    
    const listUpdated = [];
    let count = 0;    
    list.forEach( (pokemon) => listUpdated.push({...pokemon, number: "#" + (++count).toString().padStart(3,'0') }));
    const updatedAction = {...action, action: {...action.action, payload: listUpdated}}
    next(updatedAction);
};
