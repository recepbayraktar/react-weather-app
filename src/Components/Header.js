import { useContext } from "react"
import cityContext from "../CityContext"
import cities from "../cities.json"
import '../App.css';



export default function Header(){

    const {city, setCity} = useContext(cityContext)
    const handleChange=(e)=>{
        setCity(cities.filter((city)=>{
              return city.name === e.target.value
        })[0]);
      }
   
    return (
        <select className="col-sm-6 offset-sm-3 with-linear-gradient select-input" name="city" onChange={handleChange}>
        {
          cities.map((city)=>{ 
            return <option key={city.id} value={city.name}>{city.name}</ option>
           })
        }
        </select>

        
    )
}