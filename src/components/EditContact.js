import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import datasource from '../datasource';

function EditContact() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const { contactId } = useParams();
  console.log('Contact ID from params: ', contactId);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const url =`/contacts?contactId=${contactId}`;
        const response = await datasource.get(url);
        
        const contact = response.data[0];
        console.log("Fetched contact in EditContact: ", contact, "datasource URL: ", url);
        setName(contact.Name);
        setAge(contact.Age);
        setBirthdate(contact.Birthdate.substring(0, 10));
      } catch (error) {
        console.error(`Error fetching contact with ID ${contactId}`, error);
      }
    };

    fetchContact();
  }, [contactId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedContact = {
      id: contactId,
      Name: name,
      Age: parseInt(age),
      Birthdate: `${birthdate}`
    };

    try {
      await datasource.put('/contacts/', updatedContact);
      navigate('/');
    } catch (error) {
      console.error('Error updating contact', error);
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
      <button type="submit">Update Contact</button>
    </form>
  );
}

export default EditContact;
