import React from "react";

const SortBar = (props) => {
    return (
        <div>
            <label>
                Sort By:
            <select onChange={props.botSortBy}>
                    <option value="health">Health</option>
                    <option value="damage">Damage</option>
                    <option value="armor">Armor</option>
                </select>
            </label>

            <div>
                <input type="text" placeholder="search by class" onChange={(e) => props.filterByClass(e)} />
            </div>

        </div>
    )

};

export default SortBar;

