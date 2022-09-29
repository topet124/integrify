import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import "./App.css";

function Home() {
  const [userData, setUserData] = useState([]);
  console.log(userData);
  const URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        const response = await axios.get(URL);

      const data = await response.data;
      setUserData(data);
      console.log("response:", data);
      } catch (error) {
        throw error
      }
    };
    fetchAllUser();
  }, []);

  if(!userData){
  <p>Loading...</p>
  }

  return (
    <section className="container">
      {userData.map((user) => (
        <div className="card" key={user.id}>
          <div className="inside">
            <h1>{user.name[0]}</h1>
          </div>
          <div className="last">
            <p>{user.name}</p>
            <p>{`@${user.username}`}</p>
            <a href="{user.website}" className="new">{`http://${user.website}`}</a>
            <button>
              <Link className="new2" to={`/user/${user.id}`}>
                More details
              </Link>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Home;
