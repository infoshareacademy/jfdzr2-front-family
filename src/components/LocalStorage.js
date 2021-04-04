export const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch(err) {
        console.log(err)
        return undefined;
    }
};

export const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch(err) {
        console.log(err);
    }
};
