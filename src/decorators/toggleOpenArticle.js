// HOC, subs for toggleOpenArticleClass

import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    state = {
        openItemId: null
    }

    toggleOpenArticle = openItemId => openItemId !== this.state.openItemId ? this.setState({ openItemId }) : this.setState({openItemId: null})

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle} />
    }
}