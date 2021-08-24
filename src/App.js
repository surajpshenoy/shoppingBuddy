import React, { useState } from "react";
import Alert from "./Alert";
import List from "./List"

function App() {
  const [name, setName] = useState();
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: true, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Clicked');
  }

  return (
    <section className="section-center">
      <form classname="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert/>}
      </form>
      <div className="grocery-container">
        <List/>
        <button className="clear-btn">
        Clear Items
        </button>
      </div>
      

    </section>
  );
}

export default App;
