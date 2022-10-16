import './App.css';
import { useState } from 'react';

function App() {
  const [drinks , setDrinks] = useState([]);

  function getDrinksOnClick() {
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY ,
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  };
  
  fetch('https://the-cocktail-db.p.rapidapi.com/randomselection.php', options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setDrinks(data.drinks);
    });
}

return (
  <div>
    <button onClick={getDrinksOnClick}>Get Drinks</button>
    {
      drinks.map(d => {
        return (
          <div>
            { d.strDrink }
          </div>
        )
      })
    }
  </div>
)

}

export default App;
