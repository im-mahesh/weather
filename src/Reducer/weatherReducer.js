const weatherReducer = (state = { list: null, item: false }, action) => {
    switch (action.type) {
        case 'CITY_LIST':
            return state = { list: action.payload, item: true };
        case 'CITY_NULL_LIST':
            return state = { list: null, item: false };
        default:
            return state;
    }
}

export default weatherReducer;