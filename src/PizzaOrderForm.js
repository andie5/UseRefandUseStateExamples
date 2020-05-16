// Pizza order app
// radio buttons, a checkbox, a select dropdown, and a textarea.
import React, { useState } from "react";

const PizzaOrderForm = () => {
  const [pizzaSize, setPizzaSize] = useState("small");
  const [topping, setTopping] = useState("");
  const [glutenFree, setGlutenFree] = useState(false);
  const [specialInstructions, setSpecialInstructions] = useState("");

  const handleGlutenFree = (event) => {
    setGlutenFree(event.target.checked);
    // console.log("gluten free: ", event.target.checked);
  };

  const handlePizzaSize = (event) => {
    setPizzaSize(event.target.value);
    // console.log("pizzaSize: ", event.target.value);
  };

  const handleTopping = (event) => {
    setTopping(event.target.value);
    // console.log("topping: ", event.target.value);
  };

  const handleExtraInstructions = (event) => {
    setSpecialInstructions(event.target.value);
    // console.log("special instructions: ", event.target.value);
  };

  const handleSubmitOrder = () => {
    console.log("Pizza Size: ", pizzaSize);
    console.log("Topping: ", topping);
    console.log("Gluten Free: ", glutenFree);
    console.log("Special Instructions: ", specialInstructions);
  };

  return (
    <div>
      <h1>Order Your Pizza</h1>
      <h2>Size</h2>
      <p>
        <label>
          Small
          <input
            type='radio'
            name='sizeOfPizza'
            value={"small"}
            checked={pizzaSize === "small"}
            onChange={handlePizzaSize}
          />
        </label>
        <label>
          Medium
          <input
            type='radio'
            name='sizeOfPizza'
            value={"medium"}
            checked={pizzaSize === "medium"}
            onChange={handlePizzaSize}
          />
        </label>
        <label>
          Large
          <input
            type='radio'
            name='sizeOfPizza'
            value={"large"}
            checked={pizzaSize === "large"}
            onChange={handlePizzaSize}
          />
        </label>
      </p>
      <h3>Topping</h3>
      <select name='topping' onChange={handleTopping} value={topping}>
        <option value='pepperoni'>Pepperoni</option>
        <option value='chicken'>Chicken</option>
        <option value='spicy beef'>Spicy Beef</option>
        <option value='vegetables'>Vegetables</option>
      </select>
      <p>
        <label>
          <input
            type='checkbox'
            name='glutenFree'
            value='glutenFree'
            checked={glutenFree}
            onChange={handleGlutenFree}
          />{" "}
          Gluten Free
        </label>
      </p>
      <h3>Special Instructions:</h3>
      <textarea
        name='specialInstructions'
        value={specialInstructions}
        onChange={handleExtraInstructions}
      />
      <p>
        <button onClick={handleSubmitOrder}>Submit</button>
      </p>
    </div>
  );
};

export default PizzaOrderForm;
