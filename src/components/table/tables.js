import React from "react";
import Table from "./table";
import "./table.css";

const Tables = (props) => {
  return (
    <div className="tables_wrapper">
      <div>
        <div className="web_table_text">Web Table</div>  
        <div className="default_table">
          <Table movies={props.movies.slice(0,10)}></Table>
        </div>
      </div>
      <div>
        <div className="web_table_text">Web Table with scroll</div> 
        <div id="table-wrapper">
          <div id="table-scroll">
            <Table movies={props.movies}></Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tables;