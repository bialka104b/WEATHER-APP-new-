

const Form = (props) => {
  return(
    <form onSubmit={props.submit}>
      <input 
      className="input"
      type="text" 
      value={props.value}
      onChange={props.change}
      placeholder="Wpisz miasto"
      />
      <button className="btn btn-success">Wyszukaj miasto</button>
    </form>
   )
}

export default Form;