import Link from "next/link";
import React from "react";

const Card = ({ title, id }) => {
  return (
    <div className="card bg-base-100 border w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <Link href={`/users/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
