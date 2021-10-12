import React, { ReactElement } from "react";
import { Item } from "../../Types/generalTypes";
import UserCards from './UserCards'

interface Props{
    items: Item[];
}

function UserList({items}: Props): ReactElement {
  return <div>
      {items.map((item: Item)=>{
          return (
              <UserCards {...item}/>
          )
      })}
  </div>;
}

export default UserList;
