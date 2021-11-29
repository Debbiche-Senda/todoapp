import React from 'react'
import "./Filter.css";

const Filter = ({setFilter}) => {
    return (
        <div>
            <button className="mybtnn" onClick={()=>setFilter("all")} > All</button>
            <button className="mybtnn" onClick={()=>setFilter("done")} > Done</button>
            <button className="mybtnn" onClick={()=>setFilter("not")} > Not</button>

        </div>
    )
}

export default Filter

