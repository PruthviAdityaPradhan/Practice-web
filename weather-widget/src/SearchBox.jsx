import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox(){
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "dc48102e7b424805a2f63b3c26e86113";

    let getWeatherInfo = async () =>{
        let response = await(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
    };

    

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = (evt) =>{
        evt.preventDefault();
        setCity("");
        getWeatherInfo();
    } 

    return(
    <div className='searchBox'>
    <h3>Search for weather</h3>
    <form onSubmit={handleSubmit}>
    <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
    <br></br>
    <br></br>
    <Button variant="contained" type="submit">Search</Button>
    </form>
    </div>
    );
}