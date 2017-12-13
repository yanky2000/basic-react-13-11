import {OrderedMap} from 'immutable'

export function arrToMap(arr) {
    return arr.reduce((acc, item) => ({
        ...acc,
        [item.id]: item
    }), {})
}

export function arrToImmutableMap(arr, RecordModel) {
    return arr.reduce((acc, item) => acc.set(item.id, RecordModel ? new RecordModel(item) : item), new OrderedMap())
}


export function paginatorSet({total, limit, offset}) {
    const counter = Math.ceil(total / limit)
    const pageSet = {}
    let i = 0
    if (!offset || offset > limit) {
        offset = limit
    }
    for (let x = 1; x <= counter; x++) {
        pageSet[x] = i
        i = i + offset
    }
    console.log(pageSet[2])
    return pageSet
}