import {DELETE_ARTICLE, INCREMENT} from '../constants'

export function increment() {
    const action = { type: INCREMENT }
    return action
}


export function deleteArticle(id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: {id}
    }
    return action
}