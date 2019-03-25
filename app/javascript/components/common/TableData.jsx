import React from "react";
export default function TableData(props) {
  return (
    <div>
      <h1>List of {props.type}</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(element => {
            return (
              <tr>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>
                  {props.type === "partners" && (
                    <a href={"/partners/" + element.id}>Show</a>
                  )}
                  {props.type === "audience" && <a href="/#">Dummy Link</a>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
