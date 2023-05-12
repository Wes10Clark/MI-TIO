import React, { useState } from "react";
import "./drinks.css";
import { BiDrink } from "react-icons/bi";

const categories = [
  { id: "1", name: "Beverages", selector: "#beverages" },
  { id: "2", name: "Margaritas", selector: "#margaritas" },
  { id: "3", name: "Premium-Ritas", selector: "#premiumritas" },
  { id: "4", name: "Beer", selector: "#beer" },
  { id: "5", name: "Tequila", selector: "#tequila" },
  { id: "6", name: "Wine", selector: "#wine" },
  { id: "7", name: "Mixed Drinks", selector: "#mixeddrinks" },
];

const Drinks = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  function handleCategoryChange(event) {
    const selectedCategoryId = event.target.value;
    const selectedCategory = categories.find(
      (category) => category.id === selectedCategoryId
    );
    setSelectedCategory(selectedCategory);
    const categoryElement = document.querySelector(selectedCategory.selector);
    categoryElement.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="drinks">
      <div className="container">
        <h2 className="section-title">Drink Menu</h2>
        <div className="searchbar">
          <label className="selector" htmlFor="category-dropdown">
            Select a category
          </label>
          <select
            id="category-dropdown"
            value={selectedCategory.id}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <h4 className="drink-alert">
          We have a full bar and can make any cocktail you like
        </h4>

        <BiDrink className="menu-icon" />
        <h3 className="menu-category" id="beverages">
          Beverages
        </h3>
        <div className="card">
          <h4 className="food-title">Fresh Mexican Waters</h4>
          <p className="food-description">Horchata, Tamarindo, Jamaica</p>
          <h5 className="food-price">$3.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Jarritos</h4>
          <p className="food-description">Fruit flavored sodas</p>
          <h5 className="food-price">$3.75</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Mexican Coke</h4>
          <p className="food-description">
            Made with cane sugar and imported from mexico
          </p>
          <h5 className="food-price">$4.50</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Soft Drinks</h4>
          <p className="food-description">
            Coke, Coke Zero, Diet Coke, Sprite, Root Beer, Dr. Pepper, Diet Dr.
            Pepper, Pink Lemonade
          </p>
          <h5 className="food-price">$3.25</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Iced Tea</h4>
          <p className="food-description">Sweet or Unsweetened tea</p>
          <h5 className="food-price">$3.25</h5>
        </div>
        <h3 className="menu-category" id="margaritas">
          Margaritas
        </h3>
        <div className="card">
          <h4 className="food-title">House Margarita</h4>
          <p className="food-description">Frozen or on the rocks</p>
          <h5 className="food-price">12oz $6.99 - 27oz $10.99 - 38oz $16.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Swirl Margarita</h4>
          <p className="food-description">
            Frozen margarita topped with house sangria
          </p>
          <h5 className="food-price">27oz $13.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Flavored Margarita</h4>
          <p className="food-description">
            Strawberry, Mango, Peach, Guava, Watermelon, Ocean Blue Mexican Flag
          </p>
          <h5 className="food-price">27oz $12.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Top Shelf Margarita</h4>
          <p className="food-description">
            Jose Cuervo Tequila, Grand Marnier, Fresh Lime Juice, Orange Juice,
            Triple Sec
          </p>
          <h5 className="food-price">27oz $14.99 - 32oz $21.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Skinny Margarita</h4>
          <p className="food-description">
            Espolon Blanco Tequila, Agave Nectar, Fresh Lime Juice
          </p>
          <h5 className="food-price">27oz $15.99 - 32oz $21.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Rainbow Margarita</h4>
          <p className="food-description">
            Frozen House Margarita with a mixture of Strawberry, Mango, Peach,
            Raspberry, Blue Flavors
          </p>
          <h5 className="food-price">27oz $15.99 - 32oz $21.99</h5>
        </div>
        <h3 className="menu-category" id="premiumritas">
          Premium-Ritas
        </h3>
        <span className="menu-category-details">Frozen or On The Rocks</span>
        <div className="card">
          <h4 className="food-title">Berry-Rita</h4>
          <p className="food-description">
            Espolon Blanco Tequila, Royale Montaine Orange Cognac, Berry Puree,
            Sweet & Sour
          </p>
          <h5 className="food-price">$18.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Mangoneada-Rita</h4>
          <p className="food-description">
            Espolon Blanco Tequila, Royale Montaine Orange Cognac, Mango Puree,
            Sweet & Sour, Chamoy
          </p>
          <h5 className="food-price">$16.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Cucumber-Rita</h4>
          <p className="food-description">
            Teremana Tequilla Blanco, Lime Juice, Fresh Muddled Cucumber &
            Cilantro
          </p>
          <h5 className="food-price">$15.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Guava-Rita</h4>
          <p className="food-description">
            Sauza Blue Blanco, Royale Montaine Orange Cognac, Guava Purée, Sweet
            & Sour, Chamoy Sryup
          </p>
          <h5 className="food-price">$14.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Hawaiian-Rita</h4>
          <p className="food-description">
            Cabo Wabo Blanco Tequila, Royale Montaine Orange Cognac, Lime Juice,
            Pineapple Juice, Blue Curaçao
          </p>
          <h5 className="food-price">$14.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Watermelon-Rita</h4>
          <p className="food-description">
            Avion Blanco Tequila, Royale Montaine Orange Cognac, Watermelon
            Puree, Sweet & Sour, Chamoy Syrup
          </p>
          <h5 className="food-price">$14.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Pineapple Jalapeño-Rita</h4>
          <p className="food-description">
            Avion Blanco Tequila, Royale Montaine Orange Cognac, Watermelon
            Puree, Sweet & Sour, Chamoy Syrup
          </p>
          <h5 className="food-price">$15.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Corona-Rita</h4>
          <p className="food-description">Margarita topped with a Corona</p>
          <h5 className="food-price">$15.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Dosa-Rita</h4>
          <p className="food-description">Margarita topped with a Dos Equis</p>
          <h5 className="food-price">$15.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Champa-Rita</h4>
          <p className="food-description">
            Teremana Tequila Blanco, Royale Montaine Orange Cognac, Lime Juice,
            topped with Champagne and a splash of Blue Curaçao
          </p>
          <h5 className="food-price">$16.99</h5>
        </div>
        <h3 className="menu-category" id="beer">
          Beer
        </h3>
        <span className="menu-category-details">Imports</span>
        <div className="card">
          <h4 className="drink-title">Bottle Imports</h4>
          <p className="drink-description">Served with a lime</p>
          <h6 className="drink-name">Cornona</h6>
          <h6 className="drink-name">Cornona Premier</h6>
          <h6 className="drink-name">Cornona Light</h6>
          <h6 className="drink-name">Tecate</h6>
          <h6 className="drink-name">Modelo</h6>
          <h6 className="drink-name">Negra Modelo</h6>
          <h6 className="drink-name">Victoria</h6>
          <h6 className="drink-name">Sol</h6>
          <h5 className="drink-price">$4.75</h5>
        </div>
        <span className="menu-category-details">Domestic</span>
        <div className="card">
          <h4 className="drink-title">Bottle Domestic</h4>
          <h6 className="drink-name">Miller Lite</h6>
          <h6 className="drink-name">Michelob Ultra</h6>
          <h6 className="drink-name">Budweiser</h6>
          <h6 className="drink-name">Bud Light</h6>
          <h6 className="drink-name">Coors Light</h6>
          <h6 className="drink-name">Yuengling</h6>
          <h6 className="drink-name">Blue Moon</h6>
          <h5 className="drink-price">$4.25</h5>
        </div>
        <span className="menu-category-details">Draft</span>
        <div className="card">
          <h4 className="drink-title">Draft Beers</h4>
          <p className="drink-description">Served with a cold glass</p>
          <h6 className="drink-name">Cornona Premier</h6>
          <h6 className="drink-name">Modelo</h6>
          <h6 className="drink-name">Dos Equis</h6>
          <h6 className="drink-name">Michelob Ultra</h6>
          <h6 className="drink-name">Blue Moon</h6>
          <h6 className="drink-name">Bud Light</h6>
          <h6 className="drink-name">Miller Light</h6>
          <h5 className="drink-price">Small $2.75 - Large $4.75</h5>
        </div>
        <h3 className="menu-category" id="tequila">
          Tequila
        </h3>
        <span className="menu-category-details">by the shot</span>
        <div className="card">
          <h4 className="drink-title">Tequila</h4>
          <p className="drink-description">Served with a lime</p>
          <h6 className="drink-name">1800</h6>
          <h6 className="drink-price">$7.25</h6>
          <h6 className="drink-name">Jose Cuervo</h6>
          <h6 className="drink-price">$6.25</h6>
          <h6 className="drink-name">Avión</h6>
          <h6 className="drink-price">$9.99</h6>
          <h6 className="drink-name">Espolon</h6>
          <h6 className="drink-price">$8.99</h6>
          <h6 className="drink-name">Cabo Wabo</h6>
          <h6 className="drink-price">$8.25</h6>
          <h6 className="drink-name">Don Julio</h6>
          <h6 className="drink-price">$9.75</h6>
          <h6 className="drink-name">Sauza Hornitos</h6>
          <h6 className="drink-price">$6.99</h6>
          <h6 className="drink-name">El Jimador</h6>
          <h6 className="drink-price">$6.25</h6>
          <h6 className="drink-name">Herradura</h6>
          <h6 className="drink-price">$8.99</h6>
          <h6 className="drink-name">3 Generaciones</h6>
          <h6 className="drink-price">$10.25</h6>
          <h6 className="drink-name">Patron</h6>
          <h6 className="drink-price">$10.25</h6>
          <h6 className="drink-name">Teramana</h6>
          <h6 className="drink-price">$7.25</h6>
          <h6 className="drink-name">Don Julio Reposado</h6>
          <h6 className="drink-price">$12.99</h6>
          <h6 className="drink-name">Don Julio 1942</h6>
          <h6 className="drink-price">$14.99</h6>
          <h6 className="drink-name">Casa Azul</h6>
          <h6 className="drink-price">$14.99</h6>
        </div>
        <h3 className="menu-category" id="wine">
          Wine
        </h3>
        <span className="menu-category-details">by the glass</span>
        <div className="card">
          <h4 className="drink-title">Wine</h4>
          <p className="drink-description">Served in a wine glass</p>
          <h6 className="drink-name">Sangria</h6>
          <h6 className="drink-name">Merlot</h6>
          <h6 className="drink-name">Pinot Grigio</h6>
          <h6 className="drink-name">Burgundy</h6>
          <h6 className="drink-name">Chardonnay</h6>
          <h6 className="drink-name">White Zinfandel</h6>
          <h5 className="drink-price">$6.99 per glass</h5>
        </div>
        <h3 className="menu-category" id="mixeddrinks">
          Mixed Drinks
        </h3>
        <div className="card">
          <h4 className="food-title">Rancheros Sangria</h4>
          <p className="food-description">
            A homemade sangria topped with fresh fruit
          </p>
          <h5 className="food-price">27oz $10.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Paloma</h4>
          <p className="food-description">
            Don Julio Blanco, Simple Syrup, Lime Juice, Ginger Beer, Fresh Mint
          </p>
          <h5 className="food-price">$12.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Bloody Mary</h4>
          <p className="food-description">Sky Vodka & House Bloody Mary Mix</p>
          <h5 className="food-price">$10.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Mexican Mule</h4>
          <p className="food-description">
            Cabo Wabo Blanco, Simple Syrup, Lime Juice, Ginger Beer, Fresh Mint
          </p>
          <h5 className="food-price">$13.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Mojito</h4>
          <p className="food-description">
            Silver Jamaica Rum, Fresh Muddled Mint, Lime, Simple Syrup, Club
            Soda (make it flavored +1 Mango, Peach, Strawberry, Watermelon,
            Guava)
          </p>
          <h5 className="food-price">$10.99</h5>
          <h5 className="food-price">Make it a flavor +$1.00</h5>
          <p className="food-description">
            Mango, Peach, Mango, Watermelon, Guava
          </p>
        </div>
        <div className="card">
          <h4 className="food-title">Michelada</h4>
          <h5 className="food-price">$9.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Daiquiri</h4>
          <p className="food-description">Strawberry, Peach, Mango, Guava</p>
          <h5 className="food-price">$11.99</h5>
        </div>
        <div className="card">
          <h4 className="food-title">Pina Colada</h4>
          <p className="food-description">
            Made with Bacardi, Served in a fresh pineapple
          </p>
          <h5 className="food-price">$14.99</h5>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
