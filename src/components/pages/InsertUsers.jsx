// src/components/pages/InsertUsers.jsx
import axios from "axios";

const InsertUsers = () => {
  const handleInsert = async () => {
    try {
      const res = await axios.get("https://devcom-server-776u.onrender.com/insert");
      alert("Inserted Users: " + res.data.message);
    } catch (error) {
      console.error("Error inserting users", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <div>
      <h1>Insert Dummy Users</h1>
      <button onClick={handleInsert}>Insert 50 Users</button>
    </div>
  );
};

export default InsertUsers;
