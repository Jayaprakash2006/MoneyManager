import './index.css'

const MoneyDetails = props => {
  const {history} = props

  const income = history
    .filter(eachItem => eachItem.type === 'Income')
    .reduce((acc, eachItem) => acc + Number(eachItem.amount), 0)

  const expenses = history
    .filter(eachItem => eachItem.type === 'Expenses')
    .reduce((acc, eachItem) => acc + Number(eachItem.amount), 0)

  return (
    <div className="transactions-container">
      <div className="transaction total">
        <img
          className="balance-image"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div className="balance-inner-container">
          <p className="balance-description">Your Balance</p>
          <p className="balance-amount" data-testid="balanceAmount">
            Rs {income - expenses}
          </p>
        </div>
      </div>
      <div className="transaction income">
        <img
          className="balance-image"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div className="balance-inner-container">
          <p className="balance-description">Your Income</p>
          <p className="balance-amount" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="transaction expenses">
        <img
          className="balance-image"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div className="balance-inner-container">
          <p className="balance-description">Your Expenses</p>
          <p className="balance-amount" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
