import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateRequest() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    id: id,
    asset_name: '',
    description: '',
    quantity: '',
    urgency: '',
    user_id: '',
    status: '',
  });

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5555/requests/${id}`)
      .then((resp) => {
        console.log(resp);
        setValue({
          ...value,
          asset_name: resp.data.asset_name,
          description: resp.data.description,
          quantity: resp.data.quantity,
          urgency: resp.data.urgency,
          user_id: resp.data.user.full_name,
          status: resp.data.status,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`http://127.0.0.1:5555/requests/${id}`, value)
      .then((resp) => {
        navigate('/managecandidates');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className='px-9 py-9 font-[Lato]'>

    <div className='flex justify-center items-center w-[800px] h-[750px] bg-[#B9D6F2] rounded-xl'>
      <div className='w-full max-w-lg p-6 mx-auto h-[600px] bg-white rounded-lg shadow-xl'>
        <h1 className='mb-6 text-2xl font-bold text-[#B9D6F2] text-center'>Update Candidate</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='asset_name' className='block mb-1 text-lg font-semibold'>
              Asset Name:
            </label>
            <input
              type='text'
              name='asset_name'
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              placeholder='Enter Asset Name'
              value={value.asset__name}
              readOnly
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='description' className='block mb-1 text-lg font-semibold'>
              Description:
            </label>
            <input
              type='text'
              name='description'
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              placeholder='Enter Description'
              value={value.description}
              readOnly
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='quantity' className='block mb-1 text-lg font-semibold'>
              Quantity:
            </label>
            <input
              type='quantity'
              name='quantity'
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              placeholder='Enter Quantity'
              value={value.quantity}
              readOnly
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='urgency' className='block mb-1 text-lg font-semibold'>
              Urgency:
            </label>
            <input
              type='text'
              name='urgency'
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              placeholder='Enter Urgency'
              value={value.urgency}
              readOnly
            />
          </div><div className='mb-4'>
            <label htmlFor='user' className='block mb-1 text-lg font-semibold'>
              User:
            </label>
            <input
              type='text'
              name='user'
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              placeholder='Enter User'
              value={value.user}
              readOnly
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='status' className='block mb-1 text-lg font-semibold'>
              Status:
            </label>
            <input
              type='text'
              name='status'
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              placeholder='Enter Status'
              value={value.status}
              onChange={(e) =>
                setValue({ ...value, status: e.target.value })
              }
            />
          </div>
          <button className='w-full py-2 mt-4 text-black bg-[#B9D6F2] rounded-lg hover:bg-blue-600'>
            Update
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default UpdateRequest;