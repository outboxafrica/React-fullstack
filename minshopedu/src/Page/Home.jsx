import React from 'react'
import Card from '../Componets/Card'
import {data} from '../Library/stock'
function Home() {
    console.log(data);
    return (
        <div className="home">
            {
            data.map(stock =>(
                <Card img={stock.image} price={stock.price} key={stock.id}/>
                
                ))}
                

        </div>
    )
}

export default Home
