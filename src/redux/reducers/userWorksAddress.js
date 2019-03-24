const initialState = {
    works_address: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_WORKS_ADDRESS':
            let data_info_vega = [];
            let _len = action.data_info.length;
            for (let i = 0; i < _len; i++) {
                if ('index.vega.json' in action.data_info[i].files) {
                    data_info_vega.push(action.data_info[i])
                }
            }
            return {
                ...state,
                works_address: data_info_vega
            }
        default:
            return state
    }
}
