import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import './styles.css';
import Pizza from '../models/Pizza';

interface IAddPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

const initState = {
  title: '',
  price: '',
  img: ''
};

const AddPizzaForm: FC<IAddPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] =
    useState<{ title: string, price: string, img: string }>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewPizza({
      ...newPizza,
      [name]: value
    });
  }

  console.log(newPizza)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = newPizza;

    if (title && price && img) {
      addPizza({
        title,
        img,
        price: Number(price),
        id: Date.now()
      });

      setNewPizza(initState);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Name"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        type="text"
        name="price"
        placeholder="Coast"
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        type="text"
        name="img"
        placeholder="Picture"
        onChange={handleChange}
        value={newPizza.img}
      />
      <button type="submit">
        + In Order
      </button>
    </form>
  )
}

export default AddPizzaForm;