import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import datasource from '../datasource';

function AddContact() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newContact = {
      Name: name,
      Age: parseInt(age),
      Birthdate: birthdate
    };

    try {
      await datasource.post('/contacts', newContact);
      navigate('/');  // Navigate back to the contacts list
    } catch (error) {
      console.error('Error creating contact', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <label>
        Birthdate:
        <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default AddContact;
