import React, { ReactElement, useEffect } from "react";
import { Item } from "../../Types/generalTypes";
import UserCards from "./UserCards";

interface Props {
  items: Item[];
}

function UserList({ items }: Props): ReactElement {
  return (
    <div>
      {items && items.length &&
        items.map((item: Item) => {
          return <UserCards key={item.full_name} {...item} />;
        })}
    </div>
  );
}

export default UserList;
