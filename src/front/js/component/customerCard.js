import React, { useState } from "react";

export const CustomerCard = ({ item }) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Id: {item.id}</h5>
          <p className="card-text">Email: {item.email}</p>
        </div>
      </div>
    </div>
  );
};
