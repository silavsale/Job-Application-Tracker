import { REMOVE_USERS, SET_USERS } from '../actions/types.js';

const initialState = []

export default function (state = initialState, action) {
    const { type, payload } = action
    
    switch (type) {
        case SET_USERS:
            return [...state, payload]
            
        case REMOVE_USERS:
            return state.filter(user => user.id !== payload)
            
        default:
            return state
    }
}