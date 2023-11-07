import React from "react";
import { Link, useParams } from "react-router-dom";

function ServiceDetails() {
  const { country, pastSuccesses } = useParams();

  return (
    <div>
      <h1>{country}</h1>

      <h2>{pastSuccesses}</h2>

      <Link to="/Services">Services</Link>
    </div>
  );
}

export default ServiceDetails;
