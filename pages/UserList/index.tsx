import React, { ReactElement } from "react";
import { Item } from "../../Types/generalTypes";

interface Props{
    items: Item[];
}

function UserList({items}: Props): ReactElement {
  return <div>
      {items.map(({full_name, avatar_url, description})=>{
          return (<h5>{full_name}</h5>)
      })}
  </div>;
}

export default UserList;
