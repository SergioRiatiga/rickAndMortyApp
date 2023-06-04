
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormSearch from './components/FormSearch'


function App() {

  const [idLocation, setIdLocation] = useState()

  const randomLocation = getRandomNumber(126)

  const url = `https://rickandmortyapi.com/api/location/${idLocation? idLocation:randomLocation}`

  const [location, getApiLocation,  hasError] = useFetch(url)

  useEffect(() => {
    getApiLocation()
  }, [idLocation])
  
  return (
    <div className='app'>
      <img className='app__img' src="../public/top img.jpg" alt="Rick and Morty image" />
      <section className='app__content'>
        <FormSearch
          setIdLocation={setIdLocation}
        />
        {
          hasError? <h2>❌ Hey! you must provide an id form 1 to 126. 🥺 </h2> : (
            <>
              <LocationInfo
                location={location}
              />
              <div className="residentContainer">
                {
                  location?.residents.map((url) => (
                    <ResidentCard
                      url={url}
                      key={url}
                    />
                  ))
                }
              </div>
            </>
          )
        }
      </section>
      <footer className="personal__info">
        <p>Sergio Andrés Riatiga Ibáñez, sergioriatiga@gmail.com, <a href="https://github.com/SergioRiatiga" target="_blank">github</a>.</p>
      </footer>
    </div>
  )
}

export default App