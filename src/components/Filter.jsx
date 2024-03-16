import React from "react";

const Filter = ({ categoryHandler, category,colorHandler}) => {
  return (
    <div className="col-2 border border-primary">
      <h1 className="text-center mt-3 text-danger">Filter</h1>
      <div>
        <h4 className="text-center text-primary">Category</h4>
        <div>
          <ul className="list-unstyled">
            <li
              className={`${
                category === "All" ? "bg-primary text-white" : ""
              } shadow my-2 p-2 cursor-pointer`}
              onClick={() => categoryHandler("All")}
            >
              All
            </li>
            <li
              className={`${
                category === "sneakers" ? "bg-primary text-white" : ""
              } shadow my-2 p-2 cursor-pointer`}
              onClick={() => categoryHandler("sneakers")}
            >
              Sneakers
            </li>
            <li
              className={`${
                category === "flats" ? "bg-primary text-white" : ""
              } shadow my-2 p-2 cursor-pointer`}
              onClick={() => categoryHandler("flats")}
            >
              Flats
            </li>
            <li
              className={`${
                category === "sandals" ? "bg-primary text-white" : ""
              } shadow my-2 p-2 cursor-pointer`}
              onClick={() => categoryHandler("sandals")}
            >
              Sandals
            </li>
            <li
              className={`${
                category === "heels" ? "bg-primary text-white" : ""
              } shadow my-2 p-2 cursor-pointer`}
              onClick={() => categoryHandler("heels")}
            >
              Heels
            </li>
          </ul>
        </div>

        <h4 className="text-center text-primary">Color</h4>
        <div>
          <ul className="list-unstyled">
            <li
              className="shadow p-1 mt-2 text-white"
              style={{ backgroundColor: "red" }}
              onClick={()=>colorHandler("All")}
            >
              All
            </li>
            <li
              className="shadow p-1 mt-2 text-white"
              style={{ backgroundColor: "black" }}
              onClick={()=>colorHandler("black")}
            >
              Black
            </li>
            <li
              className="shadow p-1 mt-2 text-white"
              style={{ backgroundColor: "blue" }}
              onClick={()=>colorHandler("blue")}
            >
              Blue
            </li>
            <li
              className="shadow p-1 mt-2 text-white"
              style={{ backgroundColor: "red" }}
              onClick={()=>colorHandler("red")}
            >
              Red
            </li>
            <li
              className="shadow p-1 mt-2 text-white"
              style={{ backgroundColor: "green" }}
              onClick={()=>colorHandler("green")}
            >
              Green
            </li>
            <li
              className="shadow p-1 mt-2 text-dark"
              style={{ backgroundColor: "white" }}
              onClick={()=>colorHandler("white")}
            >
              White
            </li>
          </ul>
        </div>

        <h4 className="text-center text-primary">Price</h4>
        <label className="form-label">From</label>
        <input
          type="number"
          className="form-control"
          autoComplete="off"
          placeholder="From"
        />

        <label className="form-label">To</label>
        <input
          type="number"
          className="form-control"
          autoComplete="off"
          placeholder="To"
        />
      </div>
      <div className="d-flex gap-2 mt-2">
        <button className="btn btn-primary">Apply</button>
        <button className="btn btn-danger">Reset</button>
      </div>
    </div>
  );
};

export default Filter;
