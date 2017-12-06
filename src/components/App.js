import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'

class App extends Component {
    render() {
        const {articles} = this.props
        return (
            <div>
                <h1>App name</h1>
                <Counter />
                <UserForm />
                <Filters articles = {[]}/>
                <ArticleList/>
                {/*<ArticlesChart articles = {articles} />*/}
            </div>
        )
    }
}

export default App