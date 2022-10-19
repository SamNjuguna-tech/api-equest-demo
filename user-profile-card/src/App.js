import React from "react";
import { useEffect } from "react";
import {useState} from 'react'
require('./card.css')
const URL = "https://reqres.in/api/users?page=2"
function App() {

  const [loading, setLoading] = useState(false);
  const [data , setData] = useState([])
  const [error, setError] = useState("");

  function loadApi(url){
    setLoading(true)
    fetch(url)
    .then((res)=>res.json())
    .then((resData)=> setData(resData.data))
    .catch((error)=>setError(error))
    setLoading(false)
  }

    useEffect(() => {
      loadApi(URL) 
    }, [URL]);
  
   
  return (
   <div className="main-container">

    {
      data.map((user)=>(
        <div className="profile-card" key={user.id}>
        <div className="avatar-container">
          <div className="inner-border-container">
            <img src={user.avatar} alt="" />
          </div>
        </div>
        <div className="details">
            <p className="name">{user.first_name + " "+ user.first_name}</p>
            <p className="email">{user.email}</p>
            
            <div className="description">
              <h3 className="head"> About Me</h3>

              <p className="description-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Nemo dignissimos vitae corrupti omnis tenetur esse nostrum 
                 eveniet quasi suscipit exercitationem.
              </p>
            </div>

            <button className="reachout-btn">Reach Out</button>
            

          

        </div>
      </div>
      ))
    }
      
   </div>
  );
}

export default App;
