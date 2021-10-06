import React, { useState } from 'react'
// import { Link } from "react-router-dom";
// import {data} from '../Library/stock'
function Home() {
const [data, setData] = useState({
    name:"",
    email:"",
    password:""
})

function handleChangle(e){
    setData({...data, [e.target.name]: e.target.value});
}


function submit(e){
    e.preventDefault()
console.log(data.name,data.email,data.password);

}

// console.log(data.name,data.email,data.password);
    return (
        <div className="login">
<h1>Login</h1>
<input
 type="text"
name="name"
value= {data.name}
onChange={handleChangle}
placeholder="Enter Name"
/>
<br/>
<input
 type="email"
name="email"
value= {data.email}
onChange={handleChangle}
placeholder="Enter email"
/>
<br/>

<input
 type="password"
name="password"
value= {data.password}
onChange={handleChangle}
placeholder="Enter password"
/>
<br/>
<input type="button" value="submit" onClick={submit}/>
        </div>
    )
}

export default Home
