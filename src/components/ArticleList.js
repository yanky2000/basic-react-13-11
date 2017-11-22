import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
// import toggleOpenArticle from '../decorators/toggleOpenArticle'
import toggleOpenArticleClass from '../decorators/toggleOpenArticleClass'

class ArticleList extends toggleOpenArticleClass {
    static PropTypes = {
        articles: PropTypes.array.isRequired
    }

    render() {
        const articleElements = this.props.articles.map((article, index) => <li key = {article.id}>
            <Article article = {article}
                isOpen = {this.state.openArticleId === article.id} // 
                toggleOpenArticle = {this.toggleOpenArticle} //this.props.toggleOpenArticle
                
                // Replase above 2 lines when using HOC (toggleOpenArticle decorator)
                // isOpen = {this.state.openArticleId === article.id} // this.props.openArticleId === article.id
                // toggleOpen = {this.toggleOpenArticle} 
            />
        </li>)
        
        return (
            <ul>
            {articleElements}
            </ul>
        )
    }
/*

    toggleOpenArticleWitoutCurr(openArticleId) {
        this.setState({ openArticleId })
    }
*/

}

export default ArticleList