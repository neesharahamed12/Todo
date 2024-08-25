import React from 'react'
import "./home.css";

const Home = () => {
  return (
    <div className='home d-flex justify-content-center'>
      
      <div className='container d-flex  flex-column textadj'>
        <h1 className=''>Organize your <br />
         work and life, finally.
        </h1>
        
        
        <a href='./todo'> <button  className='home-btn p-3' >Make Todo List</button></a>
       
       </div>

    </div>
  )
}

export default Home;
