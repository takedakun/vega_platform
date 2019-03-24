const initialState = {
    files_info: {},
    user_id: null,
    description: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_VISUALIZATION_CODE':
            return {
                ...state,
                files_info: action.data_info.files,
                user_id: action.data_info.owner.login,
                description: action.data_info.description
            }
        default:
            return state
    }
}