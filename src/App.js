import { useState } from 'react';
import './App.css';
import foods from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const createNewFoodItem = (newItem) => {
    const updatedFoodList = [newItem, ...foodList];
    setFoodList(updatedFoodList);
  }

  const searchFilter = (chars) => { 
    let filteredList = foodList.filter((foodItem) => { 
      return foodItem.name.toLowerCase().includes(chars.toLowerCase());
    });
    setFoodList(filteredList);
  };

  const deleteFoodItem = (foodId) => {
    const allFoods = [...foodList];

    const updatedFoods =  allFoods.filter((foodItem) => foodItem.id !== foodId);

    setFoodList(updatedFoods);
  }

  return (
    <div className="App">
    <AddFoodForm createNewFoodItem={createNewFoodItem}/>
    <Search searchFilter={searchFilter}/>
      <h1>Food List</h1>

      {!foodList.length && <div><h1>No content</h1></div>}

      {foodList.map((foodItem) => (
        <div>
          <FoodBox key={foodItem.id} foodItem={foodItem} deleteFoodItem={deleteFoodItem}/>
        </div>
      ))}

    </div>
  );
}

export default App;
