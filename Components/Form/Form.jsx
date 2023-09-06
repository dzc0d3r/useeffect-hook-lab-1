import { useState } from "react";


export default function Form({ setNumberOfDogs, handleReset }) {
  // How can we manage the number of dogs?

  const [inputText, setInputText] = useState('');
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isNaN(inputText)) {
      setError("You must enter a valid number first");
      return;
    }
    setNumberOfDogs(inputText)
    setError('')
    setInputText('')
  }
  return (
    <form onSubmit={handleSubmit}>
      {error.length > 0 ? <div className="alert alert-danger">{error}</div> : null}
      <h3>Number of cute dogs is infinite!</h3>
      <div className="mb-3">
        <label>Insert number of cute dogs</label>
        <input
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          type="text"
          className="form-control"
          required
        />
      </div>
      <div className="d-flex justify-content-between">
        <button

          type="submit"
          className="btn btn-primary"
        >
          WOOF!
        </button>
        <button
          onClick={handleReset}
          type="submit"
          className="btn btn-warning"
        >
          Reset
        </button>
      </div >
    </form >
  );
}
