import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    history: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    if (title === '' || amount === '') return

    const typeValue = type === 'INCOME' ? 'Income' : 'Expenses'

    const id = uuidv4()
    const newTransaction = {
      id,
      title,
      amount,
      type: typeValue,
    }
    this.setState(prevState => ({
      history: [...prevState.history, newTransaction],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    }))
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onAmountChage = event => {
    this.setState({amount: event.target.value})
  }

  onTypeChange = event => {
    this.setState({type: event.target.value})
  }

  onDeleteClicked = id => {
    const {history} = this.state
    const updatedHistory = history.filter(eachItem => eachItem.id !== id)
    this.setState({history: updatedHistory})
  }

  render() {
    const {history, title, amount, type} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <div className="profile-container">
            <h1 className="greeting">Hi, Richard</h1>
            <p className="greeting-description">
              Welcome back to your{' '}
              <span className="app-name">Money Manager</span>
            </p>
          </div>

          <MoneyDetails history={history} />

          <div className="modification-container">
            <form className="add-transaction-form">
              <h1 className="add-transaction-heading">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                id="title"
                className="input"
                type="text"
                placeholder="Title"
                value={title}
                onChange={this.onTitleChange}
              />
              <label className="label" htmlFor="amount">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                className="input"
                placeholder="Amount"
                value={amount}
                onChange={this.onAmountChage}
              />
              <label className="label" htmlFor="type">
                TYPE
              </label>
              <select
                id="type"
                value={type}
                onChange={this.onTypeChange}
                className="input"
              >
                {transactionTypeOptions.map(eachItem => (
                  <option value={eachItem.optionId} key={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                onClick={this.addTransaction}
                className="btn"
              >
                Add
              </button>
            </form>
            <div className="history-div-container">
              <h1 className="history-heading">History</h1>
              <ul className="history-container">
                <li className="history-item">
                  <p className="head-item">Title</p>
                  <p className="head-item">Amount</p>
                  <p className="head-item">Type</p>
                </li>
                {history.map(eachItem => (
                  <TransactionItem
                    item={eachItem}
                    key={eachItem.id}
                    onDeleteClicked={this.onDeleteClicked}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
