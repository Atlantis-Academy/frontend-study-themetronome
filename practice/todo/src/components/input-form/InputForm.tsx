import './InputForm.css'

const InputForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <input type="text" placeholder="Добавьте задачу" className="form-control new-post-label" />
      <button type="submit" className="btn btn-outline-secondary">
        Добавить
      </button>
    </form>
  )
}

export default InputForm
