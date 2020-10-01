import React from "react";

const SortBar = (props) => {

    return (
        <div>
            <br></br>
            <label>
                <input name="name" type="radio" checked={props.sort} onChange={(e) => props.handelSortBy(e)} /> Sort By Name
                <input name="value" type="radio" checked={!props.sort} onChange={(e) => props.handelSortBy(e)} /> Sort By Value
      </label>
            <span></span>  <span></span>
            <label>
                Filter by Type:
            <select onChange={(e) => props.handleFilterByType(e)}>
                    <option value="all">All</option>
                    <option value="services">Services Only</option>
                    <option value="goods">Goods Only</option>
                </select>
            </label>

        </div>
    )

};

export default SortBar;

