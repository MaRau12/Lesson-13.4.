import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { CustomerCard } from "../component/customerCard.js";

export const Home = () => {
  const { store, actions } = useContext(Context);
  
  return (
    <div className="text-center mt-5">
      <h1>Welcome to robot town, where customers rent sport equipment but don't have names</h1>
      <input spaceholder="id" onKeyUp={(e) =>{
		if (e.key=="Enter"){
			actions.addNewCustomer(e.target.value)
		}
	  }}></input>
      <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-3">
        {store.customers.map((item) => {
          return(
			<CustomerCard key={item.id} item={item}/>
		  )
				
	   
        })}
      </div>
	  </div> 
  
  );
};
