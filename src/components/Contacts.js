import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import datasource from '../datasource';

function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await datasource.get('/contacts');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts', error);
            }
        };

        fetchContacts();
    }, []);

    const handleDelete = async (contactId) => {
        try {
            await datasource.delete(`/contacts/${contactId}`);
            // Refresh the contacts list after deletion
            const updatedContacts = contacts.filter(contact => contact.contactId !== contactId);
            setContacts(updatedContacts);
            

        } catch (error) {
            console.error(`Error deleting contact with ID ${contactId}`, error);
        }
    };

    return (
        <div>
            <h2>Contact List</h2>
            {contacts.map(contact => (
                <div className="card">
                    <div key={contact.id}>
                        <li className="list-group-item"><h3>{contact.Name}</h3></li>
                        <li className="list-group-item"><p>Age: {contact.Age}</p></li>
                        <li className="list-group-item"><p>Birthdate: {new Date(contact.Birthdate).toLocaleDateString()}</p></li>


                        <li className="list-group-item">
                        <Link to={`/edit/${contact.contactId}`} className="card-link">Edit</Link>
                        <Link onClick={() => handleDelete(contact.contactId)} className="card-link">Delete</Link>
                        </li>
                        
                    </div>
                </div>
            ))}

        </div>
    );
}

export default Contacts;
