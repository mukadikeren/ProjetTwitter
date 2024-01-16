
import { Children } from "react";


function Navlink(props) {

  return (

    <div>
      <img src={props.image} alt="" />
      <span>{props.children}</span>
    </div>
  )
}

export default Navlink;


