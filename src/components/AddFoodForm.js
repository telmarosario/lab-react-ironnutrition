import { useState } from "react/cjs/react.development";

function AddFoodForm({createNewFoodItem}) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleName = (event) => {setName(event.target.value)};
    const handleImage = (event) => {setImage(event.target.value)};
    const handleCalories = (event) => {setCalories(event.target.value)};
    const handleServings = (event) => {setServings(event.target.value)};

    const handleSubmit = (event) => {
        // Stop browsing from re-rendering on submit
        event.preventDefault();

        // Get data from inputs
        const newFoodItem = {name, image, calories, servings}; 

       // Call function to create new food
       createNewFoodItem(newFoodItem);

       // Clear inputs
       setName('');
       setImage('');
       setCalories(0);
       setServings(0);

    };

    const [isShowing, setIsShowing] = useState(false);

    const toggleForm = () => {
        setIsShowing(!isShowing);
    }

    return ( 
    <div>
        <button onClick={toggleForm}>
        {isShowing ? "Hide form": "Add New Food"}
        </button>
        { isShowing &&
            <form onSubmit={handleSubmit}>
            <h2>Add New Food Entry</h2>
                <label> Name </label>
                <input type="text" name="name" value={name} onChange={handleName} />

                <label> Image </label>
                <input type="text" name="image" value={image} onChange={handleImage} />

                <label> Calories </label>
                <input type="number" name="calories" value={calories} onChange={handleCalories} />

                <label> Servings </label>
                <input type="number" name="servings" value={servings} onChange={handleServings} />

                <button type="submit"> Create </button>

            </form>
        }

    </div> 
    
    );
}

export default AddFoodForm;