import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AddRequest() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState({
    asset_name: '',
    description: '',
    quantity: '',
    urgency: '',
    user_id: '',
    status: '',
  });


  const handleChange = (e) => {
    setRequests({
      ...requests,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`http://127.0.0.1:5555/requests`, requests)
      .then((resp) => {
        console.log(resp);
        navigate('/user_dashboard');
        console.log(resp);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-6 mx-auto bg-blue-300 rounded-lg shadow-xl">
        <h1 className="mb-6 text-2xl font-bold text-center">Add Request</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="student_name" className="block mb-1 text-sm">
              Asset Name:
            </label>
            <input
              type="text"
              name="asset_name"
              onChange={handleChange}
              className="w-full px-3 py-2 border text-black rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              value={requests.asset_name}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-1 text-sm">
              Description:
            </label>
            <input
              type="text"
              name="description"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              value={requests.description}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block mb-1 text-sm">
              Quantity:
            </label>
            <input
              type="text"
              name="quantity"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              value={requests.quantity}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="urgency" className="block mb-1 text-sm">
              Urgency:
            </label>
            <input
              type="text"
              name="urgency"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              value={requests.urgency}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="user_id" className="block mb-1 text-sm">
              User:
            </label>
            <input
              type="text"
              name="user_id"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              value={requests.user_id}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block mb-1 text-sm">
              Status:
            </label>
            <input
              type="text"
              name="status"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              value={requests.status}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-black bg-blue rounded-lg hover:bg-blue-600"
          >
            Add Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRequest;