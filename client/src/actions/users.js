import uuid from 'uuid'
import { SET_USERS } from './types'

export const setAlert = (user, userType) => dispatch => {
    const id = uuid.v4()
    dispatch({
        type: SET_USERS,
        payload: {user, userType, id }
    })
}