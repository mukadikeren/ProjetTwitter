
import { Children } from "react";


function Nav_link(props) {

  return (

    <div>
      <img src={props.image} className="link-1" alt="" />
      <span>{props.children}</span>
    </div>
  )
}

export default Nav_link;


