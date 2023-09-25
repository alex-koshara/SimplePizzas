import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import './styles.css';
import Pizza from '../models/Pizza';
import { log } from 'console';

interface IEditPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  handleToggleEdit: () => void;
}

const EditPizzaForm: FC<IEditPizzaFormProps> = (
  { data, updatePizza, handleToggleEdit }
) => {
  const [editPizza, setEditPizza] =
    useState<Pizza>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditPizza({
      ...editPizza,
      [name]: value
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = editPizza;

    if (title && price && img) {
      updatePizza(editPizza);
      handleToggleEdit();
    };

    console.log('after log edit Pizzza', editPizza);
  }

  return (
    <form onSubmit={handleSubmit} className='edit-form'>
      <input
        type="text"
        name="title"
        placeholder="Name"
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        type="text"
        name="price"
        placeholder="Coast"
        onChange={handleChange}
        value={editPizza.price}
      />
      <input
        type="text"
        name="img"
        placeholder="Picture"
        onChange={handleChange}
        value={editPizza.img}
      />
      <button type="submit">
        + Accept
      </button>
    </form>
  )
}

export default EditPizzaForm;