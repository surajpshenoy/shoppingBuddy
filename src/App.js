import React, { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  return (
    <section className="section-center">
      <div className="grocery-container">
     
      </div>
      

    </section>
  );
}

export default App;
