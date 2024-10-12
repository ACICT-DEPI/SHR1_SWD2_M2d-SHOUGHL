
const initialState = {
    loggedInUser: '',
    isActive: false,
    providerRating: 0
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'userlogIn':
            return {...state, loggedInUser: action.payload, isActive: true}
        case 'userlogOut':
            return {...state, loggedInUser: {}, isActive: false}
        default: 
            return state;
    }
}