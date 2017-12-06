import {INCREMENT} from '../constants'
import defaultArticles from '../fixtures'

export default (articles = defaultArticles, action) => {

    const {type, payload} = action
    switch (type) {
        case ()
    }
    // const filteredArticles  = defaultArticles.filter((article) => article.id !== payload.id)

    return articles
}