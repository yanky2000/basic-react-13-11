// HOC, subs for toggleOpenArticleClass

import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle = openArticleId => openArticleId !== this.state.openArticleId ? this.setState({ openArticleId }) : this.setState({openArticleId: null})

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle} />
    }
}