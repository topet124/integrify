import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

import { Link } from "react-router-dom";

import axios from "axios";

export default function UserPage() {
  const [data, setData] = useState([]);

  const { address: { street } = {} } = data;
  const { address: { suite } = {} } = data;
  const { address: { city } = {} } = data;
  const { address: { zipcode } = {} } = data;

  const { userId } = useParams();

  useEffect(() => {
    const fetchSingleUser = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const userData = response.data;
        setData(userData);
      } catch (error) {
        throw error;
      }
    };
    fetchSingleUser();
  }, [userId]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <section className="container">
      <div className="card2">
        <p>Name: {data.name}</p>
        <p>Username: {data.username}</p>
        <p>Phone: {data.phone}</p>
        <p>Email: {data.email}</p>
        <h3>Address</h3>
        <p>street: {street}</p>
        <p>city: {city}</p>
        <p>suite: {suite}</p>
        <p>zipcode: {zipcode}</p>
        <button className="button1">
        <Link className="button" to={`/`}>
          Back home
        </Link>
        </button>
      </div>
    </section>
  );
}
