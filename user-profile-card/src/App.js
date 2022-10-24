import React from "react";
import { useEffect } from "react";
import {useState} from 'react'
// import axios from 'axios'
require('./card.css')

function App() {
  const URL = "https://reqres.in/api/users?page=2"
  
  const [loading, setLoading] = useState(false);
  const [data , setData] = useState([])
  const [error, setError] = useState("");

  function loadData(url){
    setLoading(true)
    fetch(url)
      .then(res=>res.json())
      .then(resData=> {
        setData(resData.data)
        setLoading(false)
      } )
      .catch(error=> {
        setError(error)
        setLoading(false)
      })
    
  }
  console.log(error)
    useEffect(() => {
     
      loadData(URL)
      
    }, [URL]);
   
    return (
      <div className="main-container">
   
       
       { 
       
        data ? data.map((user)=>(
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
   
               <button className="reachout-btn">{loading ? <>Loading..</> : <>Reach Out</>}</button>
               
   
             
   
           </div>
         </div>
         )) : <div><p className="Network-error">{error}</p></div>
       }
         
      </div>
     );
  }
   
  

export default App;
