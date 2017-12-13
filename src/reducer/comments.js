import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, LOAD_COMMENTS } from '../constants'
import {arrToMap, arrToImmutableMap} from './utils'
import {OrderedMap, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    total: null
})


export default (state = new ReducerState(), action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

        case LOAD_COMMENTS + SUCCESS:
            const {total, records} = response
            // console.log('response', response)
            // console.log('total tyep of', total.typeof())
            const stateTotal = state.setIn(['total'], total)
            // console.log('state', state)
            return stateTotal.mergeIn(['entities'], arrToImmutableMap(records, CommentRecord))

    }

    return state
}