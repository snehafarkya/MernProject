import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Read = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  async function handleDelete(id) {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });
    const result1 = await response.json();
    if (!response.ok) {
      setError(result1.error);
    }
    if (response.ok) {
      console.log("deleted", response.ok);
      setError("Deleted Successfully");
      setTimeout(() => {
        setError("");
        getData();
      }, 1000);
    }
  }

  async function getData() {
    const response = await fetch("http://localhost:5000");
    const result = await response.json();
    console.log("result..", result);
    if (!response.ok) {
      setError(result.error);
    }

    if (response.ok) {
      console.log(response.ok);
      setData(result);
      setError("");
    }
  }


  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-2 text-gray-900">
      {error && <div class="alert alert-danger"> {error} </div>}
      <div className="flex justify-center flex-wrap gap-10">
        {data?.map((ele) => (
          <div key={ele._id} className="col-3">
            <div class="card bg-gray-100 p-3 rounded-md m-4 h-full w-full">
              <div class="card-body">
                <h5 class="card-title">{ele.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{ele.email}</h6>
                <p class="card-text">{ele.age}</p>
                <button class="card-link m-2 p-2 bg-gray-900 text-gray-100 rounded-sm">
                  <Link to={`/${ele._id}`}>
                  Edit
                  </Link>
                  
                  </button>

                <button class="card-link m-2 p-2  bg-gray-900 text-gray-100 rounded-sm" onClick={() => handleDelete(ele._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;