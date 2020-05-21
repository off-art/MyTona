import React from "react";
import "./loader.css";
export default function Loader() {
  return (
    <div style={{width:'80px', margin:'300px auto'}}>
      <div className="lds-dual-ring"></div>
    </div>
  );
}
