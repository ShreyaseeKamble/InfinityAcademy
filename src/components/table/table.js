import React from "react";
import "./table.css";

const Table = (props) => {
  const getRows = 
    props.movies.map((movie) => {
      return (
        <tr> 
          <td>{movie.title}</td>
          <td>{movie.director}</td>
          <td>{movie.runtime}</td>         
        </tr>
      );
    });

  return (
        <table className="Table">
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Runtime (m)</th>
          </tr>
          {getRows}
        </table>
  );
}

export default Table;
