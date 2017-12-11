import {Record} from 'immutable'
import { ADD_COMMENT } from '../constants'
import {normalizedComments} from '../fixtures'
import {arrToImmutableMap, arrToMap} from './utils'

const CommentRecord = Record({
    id: null,
    user: '',
    text: null
})

const ReducerRecord = Record({
    entities: arrToImmutableMap([], CommentRecord),
    loading: false,
    loaded: false,
    error: null
})

export default (comments = new ReducerRecord, action) => {
    const { type, payload, randomId } = action


    switch (type) {
        case ADD_COMMENT:
            return comments.setIn(['entities', randomId], payload.comment )
    }

    return comments.set('entities', arrToImmutableMap(normalizedComments, CommentRecord))
}