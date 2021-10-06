import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default  function ProductDetails() {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const [loading, setloading] = useState(true);

  const url = `https://martserver.herokuapp.com/api/v1/product/${id}`

  useEffect(  () => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    fetch(url)

  .then((response) => response.json())
  .then((json) => setInfo(json))
  .catch((e)=>console.log(e))
  .finally(()=>setloading(false))
}, [url])

//   console.log(typeof info);
  console.log(info);

    return (
        <div>
            <h1>productDetails</h1>

            {loading ? "Fetching Data": 

            (
                <div>
                    <p> {info.user.id}</p>
                <p> {info.user.name}</p>
            <p> {info.user.email}</p>
            </div>
            )
            }
           <button> <Link to='/admin'>Admin Page</Link> </button>
            
        </div>
    )
}

// export default ProductDetails
