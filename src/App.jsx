import { useEffect, useState } from 'react'
import './App.css'
import { getRandomNumber } from './utils/getRandomNumber';
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'


function App() {

const [ location, setLocation ] = useState();

const handleChange = (e) => {
  e.preventDefault() 

  //Obtenemos el valor ingresado y la guardamos 
  const newLocation = e.target.locationId.value  
  

  if(newLocation.length === 0) return
  console.log(newLocation)
  const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

  axios.get(URL)
  .then((res) => setLocation(res.data))
  .catch((err) => console.log(err))
}

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomNumber(1,126)}`

    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  }, []);

  return (
    <div className ="bg-neutral-800 w-full h-full">
      
     <header className="flex flex-col items-center gap-8 mb-8">

      {/* //Encabezado */}
     <img src="/images/Encabezado.png" alt="" className="sm:w-[350px] mx-auto  relative"/>

      <form onSubmit={handleChange}> 
      <div className="buscar" >
      <input type="text" id='locationId' placeholder="Search..." required />

      <button className="btn bx bx-search"></button>
      
    </div>
 </form>

     </header>

      <Location location={location} />
      <ResidentList location={location} />
    </div>
    
  )
}

export default App
