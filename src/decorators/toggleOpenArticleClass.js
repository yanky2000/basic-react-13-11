// Class inheritance usage, subs for HOC

import { Component } from 'react'

export default class toggleOpenArticleClass extends Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = openArticleId => openArticleId !== this.state.openArticleId ? this.setState({ openArticleId }) : this.setState({ openArticleId: null })

    render() {
        return
    }
}