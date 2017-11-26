import React, { Component } from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './app-styles.css';

class App extends Component {
    state = {
        selected: null
    }

    handleSelect = selected => this.setState({ selected })

    static defaultProps = {
    numberOfMonths: 2,
  };
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    };
  }
  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }
  handleResetClick() {
    this.setState(this.getInitialState());
  }

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        return (
            <div>
                <h1>App name</h1>
                <UserForm />
                <div className="RangeExample">
                    <p>
                        {!from && !to && 'Please select the first day.'}
                        {from && !to && 'Please select the last day.'}
                        {from &&
                            to &&
                            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                        {from &&
                            to && (
                                <button className="link" onClick={this.handleResetClick}>
                                    Reset
              </button>
                            )}
                    </p>
                    <DayPicker
                        className="Selectable"
                        numberOfMonths={this.props.numberOfMonths}
                        selectedDays={[from, { from, to }]}
                        modifiers={modifiers}
                        onDayClick={this.handleDayClick} />
                        </div>
                    <Select options={options} value={this.state.selected} onChange={this.handleSelect} multi />
                    <ArticleList articles={articles} defaultOpenId={articles[0].id} />
                    <ArticlesChart articles={articles} />
                </div>
                )
    }
}

export default App