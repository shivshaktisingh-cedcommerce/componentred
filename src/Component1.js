import React from "react";

import Component2 from "./Component2.js";
import Component8 from "./Component8.js";
// import Component4 from "./Component4.js";

class Component1 extends React.Component {
    render(){
        return(<>
            <div id="outer">
            <h3 id="heading1">React App</h3>
           
             <Component2/>
              <Component8/>
            {/* <Component4/>  */}
         
            
            
            </div>
            
           
            </>
        )
    }
}
export default Component1;