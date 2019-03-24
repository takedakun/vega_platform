import axios from 'axios';

const gist_url = 'https://api.github.com/'

export function getUserWorks(user_id) {
    return (dispatch) => {
        axios.get(`${gist_url}users/${user_id}/gists`).then((res) => {
            let data_info = res.data;
            dispatch({ type: 'SET_USER_WORKS_ADDRESS', data_info })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export function getVisualizationInfo(works_address) {
    return (dispatch) => {
        axios.get(`${gist_url}gists/${works_address}`).then((res) => {
            let data_info = res.data;
            dispatch({ type: 'SET_VISUALIZATION_CODE', data_info });
        }).catch((err) => {
            console.log(err);
        });
    }
} 
