import React, { useState, useEffect } from 'react';
import './App.css';

const apiUrl = 'https://65780a7d197926adf62f5bf9.mockapi.io/client';

const App = () => {
  const [clients, setClients] = useState([]);
  const [output, setOutput] = useState('');

  useEffect(() => {
    getClients();
  }, []);

  const getClients = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setClients(data);
      setOutput('');
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const addClient = async (name, avatar) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, avatar }),
      });
      const data = await response.json();
      setOutput(`Client "${data.name}" added successfully.`);
      getClients();

      // Reset the form
      document.getElementById('addClientForm').reset();
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };

  const updateClient = async (updateId, updateName, updateAvatar) => {
    try {
      const response = await fetch(`${apiUrl}/${updateId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: updateName, avatar: updateAvatar }),
      });
      const data = await response.json();
      setOutput(`Client "${data.name}" updated successfully.`);
      getClients();

      // Reset the form
      document.getElementById('updateClientForm').reset();
    } catch (error) {
      console.error('Error updating client:', error);
    }
  };

  const deleteClient = async (deleteId) => {
    try {
      const response = await fetch(`${apiUrl}/${deleteId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      setOutput(`Client "${data.name}" deleted successfully.`);
      getClients();

      // Reset the form
      document.getElementById('deleteClientForm').reset();
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };

  return (
    <div className="app">
      <h1>Client Management</h1>

      <div className="operation">
        <h2>GET /client</h2>
        <button onClick={getClients}>Get Clients</button>
      </div>

      <div className="operation">
        <h2>ADD /client</h2>
        <form
          id="addClientForm"
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.elements.name.value;
            const avatar = e.target.elements.avatar.value;
            addClient(name, avatar);
          }}
        >
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
          <label htmlFor="avatar">Avatar URL:</label>
          <input type="text" id="avatar" />
          <button type="submit">Add Client</button>
        </form>
      </div>

      <div className="operation">
        <h2>UPDATE /client/:id</h2>
        <form
          id="updateClientForm"
          onSubmit={(e) => {
            e.preventDefault();
            const updateId = e.target.elements.updateId.value;
            const updateName = e.target.elements.updateName.value;
            const updateAvatar = e.target.elements.updateAvatar.value;
            updateClient(updateId, updateName, updateAvatar);
          }}
        >
          <label htmlFor="updateId">Client ID:</label>
          <input type="text" id="updateId" required />
          <label htmlFor="updateName">New Name:</label>
          <input type="text" id="updateName" required />
          <label htmlFor="updateAvatar">New Avatar URL:</label>
          <input type="text" id="updateAvatar" />
          <button type="submit">Update Client</button>
        </form>
      </div>

      <div className="operation">
        <h2>DELETE /client/:id</h2>
        <form
          id="deleteClientForm"
          onSubmit={(e) => {
            e.preventDefault();
            const deleteId = e.target.elements.deleteId.value;
            deleteClient(deleteId);
          }}
        >
          <label htmlFor="deleteId">Client ID:</label>
          <input type="text" id="deleteId" required />
          <button type="submit">Delete Client</button>
        </form>
      </div>

      <div className="output">
        {output && <p>{output}</p>}
        {clients.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>
                    {client.avatar && (
                      <img
                        src={client.avatar}
                        alt={`Avatar for ${client.name}`}
                        className="avatar"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default App;