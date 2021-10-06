import React from "react";
import { useHistory } from "react-router-dom";

function Table({ data }) {
  console.log(data);

const history = useHistory();

function productIDHandle(id){
  history.push(`/productdetails/${id}`)
}

  return (
    <div>
      {data ? (
        <table>
          <thead>
            <tr>
              <th>Pdt_id</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Client</th>
              {/* <th>Email</th> */}
            </tr>
          </thead>
          <tbody className="table_body">
            {data.map((data) => (
            
          //         <Link
          // key={data.id}
          // to={{pathname: `/productdetails/${data.id}`}} >  

            <tr key={data.id} onClick={()=>productIDHandle(data.id) } >
           
                <td>{data.id}</td>
                <td>{data.product}</td>
                <td>{data.quantity}</td>
                <td>{data.amount}</td>
              
          <td>{data.user.name}</td>
                {/* <td>{data.user.email}</td> */}
               
              </tr>
              // </Link>
             
            ))}
          </tbody>
        </table>
      ) : (
        "loading..."
      )}
    </div>
  );
}

export default Table;
