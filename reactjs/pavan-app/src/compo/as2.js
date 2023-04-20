import React from 'react';


function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const [items, setItems] = React.useState(['Biryani', 'chilli chicken', 'pepper chicken']);

  const handleAddItem = () => {
    const newItem = `Lemonade`;
    setItems([...items, newItem]);
  };

  const handleRemoveItem = () => {
    setItems(items.slice(0, -1));
  };

  return (
    <center>
    <div>
      <h1 className="title"> Item List</h1>
      <List items={items} />
      <div className="button-container">
        <button className="add-button" onClick={handleAddItem}>
          Add Item
        </button>
        &nbsp;&nbsp;
        <button className="remove-button" onClick={handleRemoveItem}>
          Remove Item
        </button><br>
        </br> &nbsp;
        <button type="submit">submit</button>
        
      </div>
    </div>
    </center>
    
  );
}

export default App;

