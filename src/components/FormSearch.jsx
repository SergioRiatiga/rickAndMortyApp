import { useRef } from "react"
import getRandomNumber from "../utils/getRandomNumber"
import './styles/formSearch.css'

const FormSearch = ( {setIdLocation}) => {

  const idLocationValue = useRef()

  const handleSubmit =(e) => {
    e.preventDefault()
    const inputValue = idLocationValue.current.value.trim()
    inputValue ===''? setIdLocation(getRandomNumber(126)):
    setIdLocation(inputValue)
  }

  return (
    <form className="form" onSubmit={handleSubmit} >
      <input className="form__input"
        placeholder="Number location  6, 27, ..." 
        type="text" 
        ref={idLocationValue}
      />
      <button className="form__btn">Search</button>
    </form>
  )
}

export default FormSearch