import './index.css'

const TransactionItem = props => {
  const {item, onDeleteClicked} = props
  const {id, title, amount, type} = item

  const onDelete = () => {
    onDeleteClicked(id)
  }

  return (
    <li className="items-container">
      <p className="items">{title}</p>
      <p className="items">Rs {amount}</p>
      <p className="items">{type}</p>
      <button
        data-testid="delete"
        type="button"
        onClick={onDelete}
        className="delete-button"
      >
        <img
          alt="delete"
          className="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}
export default TransactionItem
