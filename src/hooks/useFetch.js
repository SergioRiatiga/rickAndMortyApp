import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {
  const [giveBack, setGiveBack] = useState()
  const [hasError, setHasError] = useState(false)

  const getApi =() => {
    axios
      .get(url)
      .then((res) => { 
        setGiveBack(res.data) 
        setHasError(false)
      })
      .catch((err) => {
        console.log(err)
        setHasError(true)
      })
  }
  return [giveBack, getApi, hasError]
}

export default useFetch