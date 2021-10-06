import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import { Link } from "react-router-dom";
import Table from '../Componets/Table'
function Admin() {
    // https://martserver.herokuapp.com/api/v1/product - all products
    // https://martserver.herokuapp.com/api/v1/product/11 - a specific

const [info, setInfo] = useState([]);
const [loading, setloading] = useState(true);

useEffect(  () => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    fetch('https://martserver.herokuapp.com/api/v1/product ')

  .then((response) => response.json())
  .then((json) => setInfo(json))
  .catch((e)=>console.log(e))
  .finally(()=>setloading(false))
}, [])
console.log(info);
    return (
        <div className="admin">
            {/* <h1>Admin</h1> */}
            <div className="sidebar">
                <ul>
                    <Link to="/admin"><li>All items</li></Link>
                    <Link to="/admin"><li>users</li></Link>

                </ul>

            </div>
            <div className="body">
                {/* {
                  [...info].map(data =>(
                      <div className="body_card" key ={data.id}>
                      <p>{data.title.slice(0,10)}</p>
                      <p>{data.body.slice(0)}</p>
                      </div>
                  ))  
                } */}
                {loading ? "Fetching Data": <Table data={info}/>}
                
            </div>
                
        </div>
    )
}

export default Admin
