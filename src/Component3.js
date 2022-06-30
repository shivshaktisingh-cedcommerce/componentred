import React from "react";
import Component5 from "./Component5";
import Component6 from "./Component6";

class Component3 extends React.Component {
    render(){
        return(
            <div id="component3">
            <h3 id="heading1">Component3</h3>
            <Component5/>
            <Component6/>
            </div>
        )
    }
}
export default Component3;