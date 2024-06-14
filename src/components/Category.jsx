import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.css';

const Category = () => {
  const navigate = useNavigate();

  return (
    <div className="containerFlexCar">
      <div className="categoryContainer">
        <div className="boxCate" onClick={() => navigate('/Pizzas')}>
          <img src="./img/bag.png" alt="Pizzas" />
          <h3>Antonella</h3>
        </div>
        <div className="boxCate" onClick={() => navigate('/Burguers')}>
          <img src="./img/bag-1.png" alt="Hamburgues" />
          <h3>Chole</h3>
        </div>
        <div className="boxCate" onClick={() => navigate('/HotDogs')}>
          <img src="./img/RedPurse.png" alt="HotDog" />
          <h3>Valentina</h3>
        </div>
        <div className="boxCate" onClick={() => navigate('/Bebidas')}>
          <img src="./img/RedPurse-1.png" alt="Bebidas" />
          <h3>Penélope</h3>
        </div>
      </div>
    </div>
  );
}

export default Category;
