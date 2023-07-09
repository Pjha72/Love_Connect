import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Offers() {
  const navigate = useNavigate()
  const [userage,setUserAge] = useState(null);
  const [gender,setGender] = useState("");
  const [location,setLocation] = useState("");
  const [interest,setInterest] = useState("");
  const [data,setData]=useState([])

  const handleService = async()=>{
   
    const data = await axios.post("https://dating-omwg.onrender.com/users", {
   
        userage: userage
      
}).then((data)=>{ 
  let rows = []

  data.data.data?.forEach((item) => {
    rows.push({ id: item._id + 1, Name: item.name,Age: item.age, Gender: item.gernder, Location: item.location, Interest:item.interests }, { id: item._id + 2, Name: item.name,Age: item.age, Gender: item.gernder, Location: item.location, Interest:item.interests }, { id: item._id + 3, Name: item.name,Age: item.age, Gender: item.gernder, Location: item.location, Interest:item.interests }, { id: item._id + 4,Name: item.name,Age: item.age, Gender: item.gernder, Location: item.location, Interest:item.interests }, { id: item._id + 5, collegeName: item.college, branchName: item.dept[4].dname, cutOff: item.dept[4].percentile }, { id: item._id + 6, Name: item.name,Age: item.age, Gender: item.gernder, Location: item.location, Interest:item.interests })

  })
  const doc=rows.filter(doc=>doc.age <= userage)
      localStorage.setItem("data",JSON.stringify(doc))
      console.log("Pawan",data);
      navigate('/table')
    }).catch((err)=>{
      console.log(err);
    })
  }
  
  return (
    <>
    <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
          <h1 className='text-3xl text-center mt-6 font-bold'>Let's Find Your Partner</h1>
          <div className='w-full md:w-[50%] mt-6 px-3'>
            <form >
              <input type="number" id='age' name='age'  onChange={(e)=>setUserAge(e.target.value) } placeholder='Enter The Age Here'  className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out `}/>
              <input type="text" id='gender' name='gender' onChange={(e)=>setGender(e.target.value) }  placeholder='Specify The Gender....' className={`w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6 ` } />
              <input type="text" id='location' name='location' onChange={(e)=>setLocation(e.target.value) }  placeholder='Enter the Loaction...' className={`w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6 ` } />
              <input type="text" id='interest' name='interest' onChange={(e)=>setInterest(e.target.value) }  placeholder='Specify Your Interests...' className={`w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mb-6 ` } />
              
              <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                {/* <p className='flex items-center' >Do you want to change your name?
                    <span onClick={() =>{
                      changeDetails && onSubmit();
                      setChangeDetails((prevState)=>!prevState)}}
                     className='text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer'
                    >
                      {changeDetails ? "Apply change" : "Edit"}
                    </span>
                </p> */}
                {/* <p className='text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer'>Sign Out</p> */}
                <button type="submit" className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 '>Submit</button>
              </div>
            </form>
              {/* <button type='submit' className='w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'>
              <Link to="/create-listing" className='flex justify-center items-center'>
                <FcHome className='mr-2 text-3xl bg-red-200 rounded-full p-1 border-2'/>
                Sell or rent your home
              </Link>
              </button> */}
          </div>
        </section>

       </>
  )
}
