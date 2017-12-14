import React, {Component} from 'react'
import Comment from '../Comment'
import {connect} from 'react-redux'
import {loadCommentsWithLimit} from "../../AC";
import {commentListSelector} from "../../selectors";
import {Route, NavLink} from 'react-router-dom'
import {COMMENTS_PER_PAGE} from '../../constants'
import {paginatorSet} from "../../reducer/utils";
import CommentsListPage from '../CommentsListPage'

class CommentsPage extends Component {
    componentDidMount() {
        this.props.loadCommentsWithLimit({limit: COMMENTS_PER_PAGE, offset: 0})
    }

    static propTypes = {};

    render() {
        return (
            <div>
                {this.getPaginatorAndLinks()}
                <Route path={`${this.props.match.path}/:page`} render={this.getComponent}/>
                {/*{this.getCommentsBody()}*/}


            </div>
        )
    }

    getPaginatorAndLinks() {
        const total = this.props.comments.total
        const commentsPages = Math.ceil(total / COMMENTS_PER_PAGE) //4

        let linksArr = []

        for (let pageCount = 1; pageCount <= commentsPages; pageCount++) {
            linksArr.push(<li><NavLink to={`${this.props.match.path}/${pageCount}`}>{pageCount}</NavLink></li>) // BUG! Each child in an array or iterator should have a unique "key" prop.
        }
        return (<ul> {linksArr} </ul>)

    }

    getComponent = ({match}) => <CommentsListPage key={match.params.page} page={match.params.page}/>

}


export default connect(state => {
    return {
        comments: commentListSelector(state)
    }
}, {loadCommentsWithLimit})(CommentsPage)