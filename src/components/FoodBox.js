import { Card, Col, Button } from "antd";


function FoodBox({foodItem, deleteFoodItem}) {
    return ( 
    <Col>
        
        <p>{foodItem.name}</p>
        <img src={foodItem.image} alt="food" />

        <p>Calories: {foodItem.calories} kcal</p>
        <p>Servings: {foodItem.servings}</p>
        <p>
            <b>Total Calories: {foodItem.calories * foodItem.servings }</b>
        </p>
        <Button onClick={() => deleteFoodItem(foodItem.id)}>Delete</Button>
        
    </Col> 
    
    );
}

export default FoodBox;