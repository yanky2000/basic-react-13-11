import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, LOAD_ALL_COMMENTS } from '../constants'
import {arrToMap, arrToImmutableMap} from './utils'
import {OrderedMap, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({})
})


export default (state = new ReducerState(), action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

        case LOAD_ALL_COMMENTS + SUCCESS:
            console.log(response)
            const {records} = response
            return state.set(['entities'], arrToImmutableMap(records, CommentRecord))
    }

    return state
}