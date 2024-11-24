import React from "react";

const SingleUser = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await response.json();

  return (
    <div>
      <h1 className="text-center text-2xl font-medium">{data.name}</h1>
      <h2>Username: {data.username}</h2>
      <h2>Address: {data.address.street}</h2>
      <h2>Phone: {data.phone}</h2>
      <h2>Website: {data.website}</h2>
      <h2>Company: {data.company.name}</h2>
    </div>
  );
};

export default SingleUser;
