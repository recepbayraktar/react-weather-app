
import '../App.css';

export default function WeatherCard({weather , weekDay}){

  var icon
  console.log(weekDay)  
    switch (weather.weather[0].main) {
      case "Clear":
        icon =  <img  src="weather-icons/sunny.png" alt="" />
        break;
      case "Clouds":
        icon =  <img  src="weather-icons/cloudy.png" alt="" />
        break;
      case "Rain":
        icon =  <img  src="weather-icons/rainy.png" alt="" />
        break;
    
      default:
        break;
    }
    return (
          
            <div className="col-sm-1 card rounded shadow weather-card mx-3">
                <h6 className='my-3' >{weekDay}</h6>
                {icon}
                <div className="card-body">
                  <h5 className="card-title">{weather.temp.day}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{weather.feels_like.day}</h6>
                  <p className="card-text">{weather.weather[0].main}</p>
         
                </div>
            </div>
    
    )
}