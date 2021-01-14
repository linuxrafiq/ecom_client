import React from "react";
import './grid.css'
export default function Grid ({ className, children }){
    return <div className="grid grid-vertical">
        {children}
    </div>
}