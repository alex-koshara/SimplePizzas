import React, { FC } from 'react';
import Pizza from '../models/Pizza';
import SinglePizza from './SinglePizza';

interface IDisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<IDisplayPizzasProps> = ({ pizzasList, deletePizza, updatePizza }) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return <SinglePizza
          pizza={pizza}
          updatePizza={updatePizza}
          deletePizza={deletePizza}
          key={pizza.id} />;
      })}
    </div>
  )
}

export default DisplayPizzas;