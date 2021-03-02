import './App.css';

import './App.css';
import React from 'react';
import contacts from './contacts.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }

  addRandomContacts = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    this.setState((state, props) => ({
      contacts: [...state.contacts, randomContact]
    }));
  };

  sortByName= () => {
    this.setState(()=>({
      contacts: 
        this.state.contacts.sort(function(a,b){
          let aName = a.name.toLowerCase();
          let bName = b.name.toLowerCase();     
          return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
        })
    }))
  }

  sortByPopularity= () => {
    this.setState(()=>({
      contacts: 
        this.state.contacts.sort(function(a,b){
          const aPopularity = a.popularity;
          const bPopularity = b.popularity;     
          return bPopularity - aPopularity;
        })
    }))
  }

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContacts}>
          Add random contact
        </button>
        <button onClick={this.sortByName}>
          Sort by name
        </button>
        <button onClick={this.sortByPopularity}>
          Sort by popularity
        </button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt=""></img>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;

