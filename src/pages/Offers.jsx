import React, { useContext, useState } from 'react'
// import { toast } from 'react-toastify'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

export default function Offers() {
  const navigate = useNavigate()
  const [userage, setUserAge] = useState(null);
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [interest, setInterest] = useState("");
  const [data, setData] = useState([])

  const { addUser } = useContext(AuthContext)

  const handleService = async(e)=>{
    e.preventDefault()
    console.log(userage);
    try {
      const response = await axios.get("https://dating-omwg.onrender.com/users");
      addUser(response.data);
      navigate("/table");
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <>
    <section className='max-w-6xl mx-auto flex justify-center items-center flex-col '>
      <h1 className='text-3xl text-center mt-6 font-bold'>Let's Find Your Partner</h1>
      <div className='w-full md:w-[50%] mt-6 px-3'>
        <form onSubmit={(e) => handleService(e)} >
          <input type="number" id='age' name='age' onChange={(e) => setUserAge(e.target.value)} placeholder='Enter The Age Here' className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out `} />
          <input type="text" id='gender' name='gender' onChange={(e) => setGender(e.target.value)} placeholder='Specify The Gender....' className={`w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6 `} />
          <input type="text" id='location' name='location' onChange={(e) => setLocation(e.target.value)} placeholder='Enter the Loaction...' className={`w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6 `} />
          <input type="text" id='interest' name='interest' onChange={(e) => setInterest(e.target.value)} placeholder='Specify Your Interests...' className={`w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6 `} />
          <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
            <button type="submit" onClick={(e) => handleService(e)} className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 '>Submit</button>
          </div>
        </form>
      </div>
    </section>

       </>
  )
}
