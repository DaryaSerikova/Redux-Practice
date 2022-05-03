

export const inputValue = (payload) => {
    return {
        type: 'GET_INPUT_VALUE', 
        payload
    }
}

export const resetState = () => {
    return {
        type: 'RESET_STATE'
    }
}


export const putStoreMessage = (payload) => {
    return {
        type: 'PUT_IN_MESSAGE_STORE',
        payload
    }
}